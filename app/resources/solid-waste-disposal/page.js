import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/solid-waste-disposal-brochure.pdf',
  type: 'pdf',
  downloadName: 'Brochure - Solid waste disposal.pdf',
  translations: {
    en: {
      title: 'Brochure: Solid Waste Disposal',
      description: 'Guidance on collecting and disposing of solid waste safely around shelters.',
    },
    ar: {
      title: 'بروشور التخلص من النفايات الصلبة',
      description: 'إرشادات لجمع النفايات الصلبة والتخلص منها بطريقة آمنة حول المواقع والمآوي.',
    },
  },
};

export default function SolidWasteDisposalPage() {
  return <ResourceDetail resource={resource} />;
}
