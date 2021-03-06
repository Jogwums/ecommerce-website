import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'
import {Container, Button} from '../../globalStyles';
import { Link } from 'react-router-dom'

// import imgProfile from '../../images/profile.jpg'


const InfoSection = ({lightBg, imgStart, lightTopLine, lightText, lightTextDesc,
                        topline, headline, description, primary, buttonLabel, start, img, alt }) => {

    return (
        <>
           <InfoSec lightBg={lightBg}>
               
               <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>
                                {topline}
                            </TopLine>
                            <Heading lightText={lightText}> 
                                {headline}
                            </Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>
                                {description}
                            </Subtitle>
                            <Link to="/sign-up">
                                <Button big fontBig primary={primary}>{buttonLabel}</Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
               </Container>
           </InfoSec>
        </>
    )
}

export default InfoSection
