import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import animatedTheme from "./AnimatedImgTheme"
import AnimatedImg from "./AnimatedImg";

export const Banner = () => {
    // which element in the toCycle list is being looped
    const  [loopNum, setLoopNum] = useState(0);
    // which element in the toCycle list is being deleted
    const [isDeleting, setIsDeleting] = useState(0);
    // list of words to cycle through
    const toCycle = [ "Full Stack Development", "Artificial Intelligence", "Machine Learning"];
    // set the text to display from toCycle
    const [text, setText] = useState('');
    // determines how fast each letter is typed, simulate typing
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    // determines the gap in time between each toCycle word
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta )

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        // determine which word to use from toCycle
        let i = loopNum % toCycle.length;
        let fullText = toCycle[i];
        // delete or type letter by letter if isDeleting is true or false respectively
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            // half the time taken for deleting as deleting is faster than typing
            setDelta(prevDelta => prevDelta / 2)
        }

        // if word has finished typing
        if (!isDeleting && updatedText === fullText) {
            // initiate deleting and reset the delta
            setIsDeleting(true);
            setDelta(period)
        // if word is finished deleting
        } else if (isDeleting && updatedText === '') {
            // stop deleting and increment the loopNum and setDelta to 500
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hello there 👋</span>
                        <h1>
                            <span>{`I'm Xavier Koo `}</span><br></br>
                            <span className="wrap text-secondary">
                                {text}
                            </span>
                            <hr className="bg-secondary mt-0 border-2 border-top border-secondary"></hr>
                            <p>Aspiring software engineer passionate about Full Stack Development, Artificial Intelligence and Machine Learning.</p>
                            <p> Sophomore pursuing a BSc Information Systems (IS) at Singapore Management University (SMU) with double majors in Software Design & Development and Artificial Intelligence.</p>
                        </h1>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="mt-5">
                        <AnimatedImg theme={animatedTheme} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}