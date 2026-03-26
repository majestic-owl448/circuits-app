import { useRef, useState, useCallback, useMemo } from 'react';
import type { UseCircuitReturn } from '../../hooks/useCircuit.ts';
import type { Position, CircuitComponent, ComponentType } from '../../types/circuit.ts';
import { ComponentRenderer } from './ComponentRenderer.tsx';
import { WireRenderer } from './WireRenderer.tsx';
import { CurrentOverlay } from './CurrentOverlay.tsx';
import type { WireSegment } from './CurrentOverlay.tsx';
import { NodeRenderer } from './NodeRenderer.tsx';
import styles from './CircuitWorkspace.module.css';

/**
 * Default terminal offsets for each component type (unrotated).
 * All component SVGs are drawn with terminals along the X axis.
 */
function terminalRadius(type: CircuitComponent['type']): number {
  switch (type) {
    case 'battery': return 8;
    case 'bulb': return 18;
    case 'switch': return 16;
    case 'resistor': return 20;
    default: return 0;
  }
}

/**
 * Compute the rotation angle (degrees) a component needs so that its
 * terminals (which default along the X axis) face toward its two nodes.
 */
function computeRotation(_comp: CircuitComponent, nodeAPos: Position, nodeBPos: Position): number {
  // Direction from nodeA to nodeB through the component
  const dx = nodeBPos.x - nodeAPos.x;
  const dy = nodeBPos.y - nodeAPos.y;
  return Math.atan2(dy, dx) * (180 / Math.PI);
}

/**
 * Returns [terminalA, terminalB] as absolute positions, rotated to face the nodes.
 */
function getTerminals(
  comp: CircuitComponent,
  nodeAPos: Position,
  nodeBPos: Position,
): [Position, Position] {
  const r = terminalRadius(comp.type);
  const angleDeg = computeRotation(comp, nodeAPos, nodeBPos);
  const angleRad = angleDeg * (Math.PI / 180);
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);

  // Terminal A faces nodeA (negative direction), terminal B faces nodeB (positive direction)
  const termA: Position = {
    x: comp.position.x - r * cos,
    y: comp.position.y - r * sin,
  };
  const termB: Position = {
    x: comp.position.x + r * cos,
    y: comp.position.y + r * sin,
  };

  return [termA, termB];
}

interface Props {
  circuit: UseCircuitReturn;
  showCurrentOverlay: boolean;
  highlights?: string[];
  interactive?: boolean;
  wiringMode?: boolean;
  placementMode?: boolean;
  placementType?: ComponentType | null;
  onPlace?: (position: Position) => void;
  deletionMode?: boolean;
  onDeleteComponent?: (componentId: string) => void;
}

export function CircuitWorkspace({
  circuit,
  showCurrentOverlay,
  highlights = [],
  interactive = true,
  wiringMode = false,
  placementMode = false,
  placementType = null,
  onPlace,
  deletionMode = false,
  onDeleteComponent,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [focusedComponent, setFocusedComponent] = useState<string | null>(null);

  const { nodes, components, simulation, toggleSwitch, addWire, renameComponent } = circuit;

  const wires = components.filter(c => c.type === 'wire');
  const nonWires = components.filter(c => c.type !== 'wire');

  // Build segments following loop order so current dots all flow the same direction
  const currentSegments = useMemo<WireSegment[]>(() => {
    const { loopNodes } = simulation;
    if (loopNodes.length < 2) return [];
    const segs: WireSegment[] = [];
    const nodeMap = new Map(nodes.map(n => [n.id, n]));
    const compMap = new Map(components.map(c => [c.id, c]));

    // Walk consecutive node pairs in loop order
    for (let i = 0; i < loopNodes.length - 1; i++) {
      const fromId = loopNodes[i];
      const toId = loopNodes[i + 1];
      const fromNode = nodeMap.get(fromId);
      const toNode = nodeMap.get(toId);
      if (!fromNode || !toNode) continue;

      // Find the component connecting these two nodes
      const comp = [...compMap.values()].find(c =>
        (c.nodeA === fromId && c.nodeB === toId) ||
        (c.nodeA === toId && c.nodeB === fromId)
      );
      if (!comp) continue;

      if (comp.type === 'wire') {
        segs.push({ id: comp.id, from: fromNode.position, to: toNode.position });
      } else {
        // Compute terminals oriented for the component's actual node pair
        const nA = nodeMap.get(comp.nodeA)!;
        const nB = nodeMap.get(comp.nodeB)!;
        const [termA, termB] = getTerminals(comp, nA.position, nB.position);
        // Pick the correct direction: from → terminal near from, terminal near to → to
        const isForward = comp.nodeA === fromId;
        const termFrom = isForward ? termA : termB;
        const termTo = isForward ? termB : termA;
        segs.push({ id: `${comp.id}-a`, from: fromNode.position, to: termFrom });
        segs.push({ id: `${comp.id}-b`, from: termTo, to: toNode.position });
      }
    }
    return segs;
  }, [simulation, nodes, components]);

  const handleNodeClick = useCallback((nodeId: string) => {
    if (!wiringMode) return;
    if (!selectedNode) {
      setSelectedNode(nodeId);
    } else if (selectedNode !== nodeId) {
      addWire(selectedNode, nodeId);
      setSelectedNode(null);
    } else {
      setSelectedNode(null);
    }
  }, [wiringMode, selectedNode, addWire]);

  const handleComponentClick = useCallback((componentId: string) => {
    if (!interactive) return;
    if (deletionMode && onDeleteComponent) {
      const comp = components.find(c => c.id === componentId);
      if (comp && comp.type !== 'wire') {
        onDeleteComponent(componentId);
      }
      return;
    }
    const comp = components.find(c => c.id === componentId);
    if (comp?.type === 'switch') {
      toggleSwitch(componentId);
    }
  }, [interactive, components, toggleSwitch, deletionMode, onDeleteComponent]);

  const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!placementMode || !placementType || !onPlace) return;
    const svg = svgRef.current;
    if (!svg) return;

    // Only handle clicks directly on the SVG background, not on child elements
    if (e.target !== svg && !(e.target as Element).classList.contains(styles.clickArea)) return;

    const ctm = svg.getScreenCTM();
    if (!ctm) return;

    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    const svgPoint = point.matrixTransform(ctm.inverse());

    onPlace({ x: Math.round(svgPoint.x), y: Math.round(svgPoint.y) });
  }, [placementMode, placementType, onPlace]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!focusedComponent) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleComponentClick(focusedComponent);
    }

    // Tab through components
    if (e.key === 'Tab') {
      const allIds = nonWires.map(c => c.id);
      const idx = allIds.indexOf(focusedComponent);
      if (e.shiftKey) {
        const prev = idx > 0 ? allIds[idx - 1] : allIds[allIds.length - 1];
        setFocusedComponent(prev);
      } else {
        const next = idx < allIds.length - 1 ? allIds[idx + 1] : allIds[0];
        setFocusedComponent(next);
      }
      e.preventDefault();
    }
  }, [focusedComponent, handleComponentClick, nonWires]);

  return (
    <div
      className={styles.container}
      role="application"
      aria-label="Circuit workspace"
    >
      <svg
        ref={svgRef}
        className={`${styles.svg} ${placementMode && placementType ? styles.placementCursor : ''} ${deletionMode ? styles.deletionMode : ''}`}
        viewBox="0 0 700 500"
        onKeyDown={handleKeyDown}
        onClick={handleSvgClick}
        tabIndex={0}
        aria-label="Interactive circuit diagram"
      >
        {/* Transparent click area for placement */}
        {placementMode && placementType && (
          <rect className={styles.clickArea} x="0" y="0" width="700" height="500" fill="transparent" />
        )}

        {/* Wires first (behind components) */}
        {wires.map(wire => {
          const nodeA = nodes.find(n => n.id === wire.nodeA);
          const nodeB = nodes.find(n => n.id === wire.nodeB);
          if (!nodeA || !nodeB) return null;
          return (
            <WireRenderer
              key={wire.id}
              from={nodeA.position}
              to={nodeB.position}
              isActive={simulation.isComplete && !simulation.isShortCircuit}
            />
          );
        })}

        {/* Connection lines from components to their nodes */}
        {nonWires.map(comp => {
          const nodeA = nodes.find(n => n.id === comp.nodeA);
          const nodeB = nodes.find(n => n.id === comp.nodeB);
          if (!nodeA || !nodeB) return null;
          const isActive = simulation.isComplete && !simulation.isShortCircuit;
          const [termA, termB] = getTerminals(comp, nodeA.position, nodeB.position);
          return (
            <g key={`${comp.id}-leads`}>
              <WireRenderer from={nodeA.position} to={termA} isActive={isActive} />
              <WireRenderer from={termB} to={nodeB.position} isActive={isActive} />
            </g>
          );
        })}

        {/* Current overlay */}
        {showCurrentOverlay && simulation.isComplete && !simulation.isShortCircuit && (
          <CurrentOverlay
            segments={currentSegments}
            current={simulation.totalCurrent}
          />
        )}

        {/* Components */}
        {nonWires.map(comp => {
          const nodeA = nodes.find(n => n.id === comp.nodeA);
          const nodeB = nodes.find(n => n.id === comp.nodeB);
          const rotation = nodeA && nodeB
            ? computeRotation(comp, nodeA.position, nodeB.position)
            : 0;
          const result = simulation.componentResults.get(comp.id);
          return (
            <ComponentRenderer
              key={comp.id}
              component={comp}
              result={result}
              rotation={rotation}
              isHighlighted={highlights.includes(comp.id)}
              isFocused={focusedComponent === comp.id}
              isCircuitComplete={simulation.isComplete && !simulation.isShortCircuit}
              isDeletable={deletionMode}
              onClick={() => handleComponentClick(comp.id)}
              onFocus={() => setFocusedComponent(comp.id)}
              onRename={renameComponent}
            />
          );
        })}

        {/* Nodes (connection points) */}
        {wiringMode && nodes.map(node => (
          <NodeRenderer
            key={node.id}
            node={node}
            isSelected={selectedNode === node.id}
            onClick={() => handleNodeClick(node.id)}
          />
        ))}
      </svg>
    </div>
  );
}
