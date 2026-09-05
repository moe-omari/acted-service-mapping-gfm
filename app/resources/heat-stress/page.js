import ResourceDetail from '../ResourceDetail';

const resource = {
  type: 'image',
  files: [
    {
      src: encodeURI('/Heat stress 1.jpeg'),
      downloadName: 'Heat stress 1.jpeg',
    },
    {
      src: encodeURI('/Heat stress 2.jpeg'),
      downloadName: 'Heat stress 2.jpeg',
    },
    {
      src: encodeURI('/Heat stress 3.jpeg'),
      downloadName: 'Heat stress 3.jpeg',
    },
  ],
  translations: {
    en: {
      title: 'Heat Stress and Heat Stroke',
      description: 'Three posters covering symptoms, first aid, and prevention for heat exhaustion and heat stroke.',
    },
    ar: {
      title: 'الإجهاد الحراري وضربات الشمس',
      description: 'ثلاثة ملصقات تغطي الأعراض والإسعاف والوقاية من الإجهاد الحراري وضربة الشمس.',
    },
  },
};

export default function HeatStressPage() {
  return <ResourceDetail resource={resource} />;
}
