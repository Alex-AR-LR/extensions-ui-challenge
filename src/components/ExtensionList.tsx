import type { Extension } from '../types';
import { Card } from './Card';

interface ExtensionListProps {
  extensions: Extension[];
}

export const ExtensionList = ({ extensions }: ExtensionListProps) => {
  if (extensions.length === 0) {
    return (
      <div className="text-neutral-600 dark:text-neutral-300 py-10 text-center text-lg">
        No extensions found.
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {extensions.map((ext) => (
        <Card key={ext.name} extension={ext} />
      ))}
    </main>
  );
};
