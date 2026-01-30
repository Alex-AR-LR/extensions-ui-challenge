import { useState } from 'react';
import { Header } from './components';
import { ExtensionList } from './components/ExtensionList'; // Asegurar path correcto, verifique si está en index.ts de components
import { Wrapper } from './components/layout/Wrapper';
import extensionsData from './data/data.json';
import type { FilterType, Extension } from './types';

function App() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredExtensions = (extensionsData as Extension[]).filter((ext) => {
    if (filter === 'all') return true;
    if (filter === 'active') return ext.isActive;
    if (filter === 'inactive') return !ext.isActive;
    return true;
  });

  return (
    <div className="min-h-screen bg-linear-(--gradient-light) pt-5 pb-10 dark:bg-linear-(--gradient-dark)">
      <Wrapper>
        <Header currentFilter={filter} onFilterChange={setFilter} />
        <div className="mt-10">
          <ExtensionList extensions={filteredExtensions} />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
