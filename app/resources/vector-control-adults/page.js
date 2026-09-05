import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/vector-control-adults-poster.pdf',
  type: 'pdf',
  downloadName: 'Poster - Disease-carrying insects for adults.pdf',
  translations: {
    en: {
      title: 'Poster: Disease-carrying Insects for Adults',
      description: 'Awareness poster for adults on disease-carrying insects and prevention around shelters.',
    },
    ar: {
      title: 'بوستر الحشرات الناقلة للأمراض للراشدين',
      description: 'ملصق توعوي للراشدين حول الحشرات الناقلة للأمراض وسبل الوقاية حول المواقع والمآوي.',
    },
  },
};

export default function VectorControlAdultsPage() {
  return <ResourceDetail resource={resource} />;
}
