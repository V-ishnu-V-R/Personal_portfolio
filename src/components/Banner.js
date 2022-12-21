
import { useState,useEffect} from "react"
import { Row ,Container, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImage from "../assets/img/header-img.svg"

export const Banner=()=>{
    const [loopNum, setLoopNum] = useState(0); //it will indicate the index of which world is displayed in the (it will start from 0th index)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate=["Web Developer","MERN Stack","Public Speaker"] //this is the tex that is going to display in the bio with wrap classname
    const [text,setText]=useState('')
    const [delta,setDelta]=useState(200-Math.random()*100) //time for each letter in word to apppear 

    const period=2000; //time taken to display each word toRotate.

    useEffect(()=>{
        console.log("useeffect");

        let ticker=setInterval(()=>{
            tick();

        },delta)
        return ()=>{clearInterval(ticker)}
        

    },[text]);

    const tick =()=>{
        let i=loopNum% toRotate.length
        let fullText=toRotate[i]
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText===""){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }

    }

    return(
        <section className="banner" id="home">
              <Container>
            <Row className="align-itmes-center">
                <Col xs={12} md={6} xl={7} >
                    <span className="tagline" > Welcome to my World</span>
                    <h1>{`Hi I'm Vishnu | `} <span className="wrap" >{text}</span> </h1>
                    <p>This is about myself add cheyyada </p>
                    <button onClick={()=>{console.log('connect button')}}>Let's Connect <ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImage} alt="Header" />
                </Col>

            </Row>
            </Container>
        </section>
      
    )
}