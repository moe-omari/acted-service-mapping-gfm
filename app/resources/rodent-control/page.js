import ResourceDetail from '../ResourceDetail';

const resource = {
  file: encodeURI('/مكافحة القوارض.jpg'),
  type: 'image',
  downloadName: 'Rodent Control Poster.jpg',
  translations: {
    en: {
      title: 'Rodent Control Poster',
      description: 'Visual checklist to identify risks and keep shelters free from rodents.',
    },
    ar: {
      title: 'ملصق مكافحة القوارض',
      description: 'قائمة مرئية للتعرف على المخاطر والحفاظ على المآوي خالية من القوارض.',
    },
  },
};

export default function RodentControlPage() {
  return <ResourceDetail resource={resource} />;
}
