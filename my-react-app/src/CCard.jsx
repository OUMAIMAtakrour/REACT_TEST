

import { CCard} from '@coreui/react';
import { CCardImage} from '@coreui/react';
import { CCardImageOverlay} from '@coreui/react';
import { CCardTitle} from '@coreui/react';
import { CCardText} from '@coreui/react';
function CCard(){
    return(
        <CCard className="mb-3 bg-dark text-white">
        <CCardImage src={ReactImg} />
        <CCardImageOverlay>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </CCardText>
          <CCardText>Last updated 3 mins ago</CCardText>
        </CCardImageOverlay>
      </CCard>
    );
}

export default CCard