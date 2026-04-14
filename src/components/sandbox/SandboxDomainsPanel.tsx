import styles from './SandboxDomainsPanel.module.css';

interface Props {
  groups: Array<{
    id: string;
    title: string;
    items: string[];
  }>;
  onSelect: (item: string) => void;
}

export function SandboxDomainsPanel({ groups, onSelect }: Props) {
  return (
    <div className={styles.panel} aria-label="Sandbox domains">
      {groups.map(group => (
        <section key={group.id} className={styles.group}>
          <h3 className={styles.title}>{group.title}</h3>
          <div className={styles.items}>
            {group.items.map(item => (
              <button
                key={`${group.id}-${item}`}
                className={styles.item}
                onClick={() => onSelect(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
