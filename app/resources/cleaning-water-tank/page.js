import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/cleaning-the-water-tank.pdf',
  type: 'pdf',
  downloadName: 'Cleaning the water tank.pdf',
  translations: {
    en: {
      title: 'Cleaning the Water Tank',
      description: 'Steps for cleaning a water tank so stored water stays safer to use.',
    },
    ar: {
      title: 'تنظيف خزان المياه',
      description: 'خطوات تنظيف خزان المياه للحفاظ على سلامة المياه المخزنة.',
    },
  },
};

export default function CleaningWaterTankPage() {
  return <ResourceDetail resource={resource} />;
}
