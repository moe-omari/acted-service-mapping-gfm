import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/food-hygiene-children.pdf',
  type: 'pdf',
  downloadName: 'Food Hygiene for Children.pdf',
  translations: {
    en: {
      title: 'Food Hygiene for Children',
      description: 'Kid-friendly tips that promote safe food preparation and eating habits.',
    },
    ar: {
      title: 'نظافة الغذاء للأطفال',
      description: 'نصائح مبسطة تشجع الأطفال على تحضير وتناول الطعام بطريقة آمنة.',
    },
  },
};

export default function FoodHygieneChildrenPage() {
  return <ResourceDetail resource={resource} />;
}
