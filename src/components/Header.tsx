import type { FilterType } from '../types';
import { Logo, Moon, Sun } from '../icons';
import { Button } from './ui';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const Header = ({ currentFilter, onFilterChange }: HeaderProps) => {
  const { darkMode, toggleTheme } = useTheme();

  const getButtonColor = (filter: FilterType) => {
    return currentFilter === filter ? 'primary' : 'secondary';
  };

  const filterOptions: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ];

  return (
    <header className="space-y-10">
      <div className="bg-neutral-0 flex h-16 items-center justify-between rounded-md px-3 shadow-md dark:bg-neutral-800">
        {darkMode ? <Logo lettersColor="fill-neutral-0" /> : <Logo />}
        <Button
          onClick={toggleTheme}
          color="primary"
          size={'small'}
          radius={'lg'}
          icon={darkMode ? <Sun /> : <Moon />}
        ></Button>
      </div>
      <div className="space-y-6">
        <h1 className="dark:text-neutral-0 text-center text-4xl font-bold">
          Extensions List
        </h1>
        <div className="flex justify-around">
          {filterOptions.map((filterOption) => (
            <Button
              key={filterOption.value}
              className="px-5 text-xl font-medium shadow-sm"
              radius={'full'}
              state={'active'}
              color={getButtonColor(filterOption.value)}
              size={'small'}
              onClick={() => onFilterChange(filterOption.value)}
            >
              {filterOption.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};
