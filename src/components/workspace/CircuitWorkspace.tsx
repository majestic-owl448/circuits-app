import { useRef, useState, useCallback } from 'react';
import type { UseCircuitReturn } from '../../hooks/useCircuit.ts';
import { ComponentRenderer } from './ComponentRenderer.tsx';
import { WireRenderer } from './WireRenderer.tsx';
import { CurrentOverlay } from './CurrentOverlay.tsx';
import { NodeRenderer } from './NodeRenderer.tsx';
import styles from './CircuitWorkspace.module.css';

interface Props {
  circuit: UseCircuitReturn;
  showCurrentOverlay: boolean;
  highlights?: string[];
  interactive?: boolean;
  wiringMode?: boolean;
}

export function CircuitWorkspace({
  circuit,
  showCurrentOverlay,
  highlights = [],
  interactive = true,
  wiringMode = false,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [focusedComponent, setFocusedComponent] = useState<string | null>(null);

  const { nodes, components, simulation, toggleSwitch, addWire } = circuit;

  const wires = components.filter(c => c.type === 'wire');
  const nonWires = components.filter(c => c.type !== 'wire');

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
    const comp = components.find(c => c.id === componentId);
    if (comp?.type === 'switch') {
      toggleSwitch(componentId);
    }
  }, [interactive, components, toggleSwitch]);

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
        className={styles.svg}
        viewBox="0 0 700 500"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Interactive circuit diagram"
      >
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

        {/* Current overlay */}
        {showCurrentOverlay && simulation.isComplete && !simulation.isShortCircuit && (
          <CurrentOverlay
            nodes={nodes}
            components={components}
            current={simulation.totalCurrent}
          />
        )}

        {/* Components */}
        {nonWires.map(comp => {
          const result = simulation.componentResults.get(comp.id);
          return (
            <ComponentRenderer
              key={comp.id}
              component={comp}
              result={result}
              isHighlighted={highlights.includes(comp.id)}
              isFocused={focusedComponent === comp.id}
              isCircuitComplete={simulation.isComplete && !simulation.isShortCircuit}
              onClick={() => handleComponentClick(comp.id)}
              onFocus={() => setFocusedComponent(comp.id)}
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
