import type { Extension } from '../types';
import { Button } from './ui';

interface CardProps {
  extension: Extension;
}

export const Card = ({ extension }: CardProps) => {
  const { name, description, logo, isActive } = extension;

  return (
    <div className="bg-neutral-0 dark:bg-neutral-800 flex flex-col justify-between space-y-4 rounded-xl p-6 shadow-md transition-transform hover:-translate-y-1">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-12 w-12 rounded-lg object-contain"
          />
        </div>
        <div>
          <h3 className="text-neutral-900 dark:text-neutral-0 text-xl font-bold">
            {name}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mt-2 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="pt-2">
         {/* Aunque el filtrado es externo, mostrar el estado visualmente es util */}
         <Button 
            className="w-full font-semibold"
            color={isActive ? "primary" : "secondary"}
            size="small"
            radius="md"
         >
            {isActive ? "Install" : "Coming Soon"}
         </Button>
      </div>
    </div>
  );
};
