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

  return (
    <header className="space-y-10">
      <div className="bg-neutral-0 flex h-16 items-center justify-between rounded-md px-3 shadow-md dark:bg-neutral-800">
        {darkMode ? <Logo lettersColor="fill-neutral-0" /> : <Logo />}
        <Button
          onClick={toggleTheme}
          color="secondary"
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
          <Button
            className="px-5 text-xl font-medium"
            radius={'full'}
            color={getButtonColor('all')}
            size={'small'}
            onClick={() => onFilterChange('all')}
          >
            All
          </Button>
          <Button
            className="px-5 text-xl font-medium"
            radius={'full'}
            color={getButtonColor('active')}
            size={'small'}
            onClick={() => onFilterChange('active')}
          >
            Active
          </Button>
          <Button
            className="px-5 text-xl font-medium"
            radius={'full'}
            color={getButtonColor('inactive')}
            size={'small'}
            onClick={() => onFilterChange('inactive')}
          >
            Inactive
          </Button>
        </div>
      </div>
    </header>
  );
};
