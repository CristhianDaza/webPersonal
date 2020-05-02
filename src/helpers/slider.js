import imgFronted from '@/assets/fronted.jpg';
import imgBackend from '@/assets/backend.jpg';
import imgDesktop from '@/assets/desktop.jpg';

import imgFrontedSkill1 from '@/assets/Vue.svg';
import imgFrontedSkill2 from '@/assets/React.svg';
import imgBackendSkill1 from '@/assets/Mongo.svg';
import imgBackendSkill2 from '@/assets/Node.svg';
import imgDesktopSkill1 from '@/assets/html.svg';
import imgDesktopSkill2 from '@/assets/CSS.svg';
import imgDesktopSkill3 from '@/assets/JavaScript.svg';

const slider = [
  {
    id: '1',
    titulo: 'Desarrollo Web',
    imagenPrincipal: imgDesktop,
    imagenSkill: [
      {
        img1: imgDesktopSkill1,
        img2: imgDesktopSkill2,
        img3: imgDesktopSkill3,
      },
    ],
  },
  {
    id: '2',
    titulo: 'Desarrollo Fronted',
    imagenPrincipal: imgFronted,
    imagenSkill: [
      {
        img1: imgFrontedSkill1,
        img2: imgFrontedSkill2,
      },
    ],
  },
  {
    id: '3',
    titulo: 'Desarrollo Backend',
    imagenPrincipal: imgBackend,
    imagenSkill: [
      {
        img1: imgBackendSkill1,
        img2: imgBackendSkill2,
      },
    ],
  },
];

export default slider;
