import React from 'react';
import {ServicesContainer, ServiceH1, ServiceWrapper, ServiceCard, ServiceIcon, ServiceH2, ServiceP} from './ServiceElement';
import Icon1 from '../../images/img-1.png';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
  return (
    <ServicesContainer >
<ServiceH1>Our Services</ServiceH1>
<ServiceWrapper>
    <ServiceCard>
        <ServiceIcon src={Icon1}/>
        <ServiceH2>Reduce expenses</ServiceH2>
        <ServiceP>We help reduce your fees and increase your overall revenue</ServiceP>
    </ServiceCard>
    <ServiceCard>
        <ServiceIcon src={Icon2}/>
        <ServiceH2>Reduce expenses</ServiceH2>
        <ServiceP>We help reduce your fees and increase your overall revenue</ServiceP>
    </ServiceCard>
    <ServiceCard>
        <ServiceIcon src={Icon3}/>
        <ServiceH2>Reduce expenses</ServiceH2>
        <ServiceP>We help reduce your fees and increase your overall revenue</ServiceP>
    </ServiceCard>
</ServiceWrapper>
    </ServicesContainer>
    
    
  )
}

export default Services