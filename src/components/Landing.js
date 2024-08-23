
import { useLayoutEffect } from 'react';
import useResize from '../hooks/useResize';
import { About3, About4, About6 } from './LandingComponents';
import Landing1, { Landing1RefreshState } from './sketches/Landing1';
import { Landing2RefreshState } from './sketches/Landing2';
import { Landing3RefreshState } from './sketches/Landing3';
import useTypewriter from "../hooks/useTypewriter";
import 'dotenv/config';

const Landing = () => {
    const { breakpointSelector } = useResize();

    const [twSpan] = useTypewriter([
        "My name is ",
        "Jeremy",
        " , and I am a ",
        "full‑stack developer"
    ], 35, 1000);

    useLayoutEffect(() => {
        const refreshLoopStates = () => {
            Landing1RefreshState();
            Landing2RefreshState();
            Landing3RefreshState();
        }

        let running = false;
        let promise = false;
        const debounce = (func) => {
            if (running) {
                promise = true;
                return;
            }
            running = true;
            func();
            setTimeout(() => {
                running = false;
                if (promise) {
                    promise = false;
                    debounce(func);
                }
            }, 50);
        }

        const waitUntilInit = async () => {
            let temp;
            temp = window.setInterval(() => {
                if (refreshLoopStates() === false) {
                }
                else {
                    window.addEventListener('scroll', () => {
                        debounce(() => {
                            refreshLoopStates();
                        });
                    });
                    window.clearInterval(temp);
                }
            }, 30);
        }

        window.scrollTo(0, 0);

        waitUntilInit();
        return () => {
            window.removeEventListener('scroll', function () {
                refreshLoopStates();
            });
            Landing1RefreshState(true);
            Landing2RefreshState(true);
            Landing3RefreshState(true);
        };
    }, [])

    return (
        <div id="about-me">
            <div id="about1" style={{ height: breakpointSelector("80vh", null, null, "90vh") }}>
                <Landing1 />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center h-100">
                    <div className="display-6 pt-5 pb-2 d-inline-block text-muted fs-5 fs-md-4">So let me introduce myself...</div>
                    <div className="display-6 display-md-4 px-3 pb-3 d-inline-block">
                        <span>{twSpan(0)}</span>
                        <span className="text-primary">{twSpan(1)}</span>
                        <span>{twSpan(2)}</span>
                        <span className="text-secondary">{twSpan(3)}</span>
                    </div>
                </div>
            </div>
            <div id="about2">
                <div style={{ padding: `${breakpointSelector(30, 60, null, 80, 100, 120)}px 0px` }}>
                    <div className="align-middle container py-3 text-center text-light h-100 px-3 px-sm-5">
                        <div className="display-1 m-3 font-title">About Me</div>
                        <div className="mb-3">I create mobile apps, websites, web apps, Unity games to be played on multiple platforms.</div>
                        <p> I highly believe that the mastery of a certain framework requires the mastery of all skills relevant to that framework. Thus, I take understanding of a certain project very seriously. In any case, whether it be a website for your aspiring business, or a mobile app that unites your entire customer base,</p>
                        <p className="lead fw-bold">I get the job done, and more.</p>
                    </div>
                </div>
            </div>
            <About3 />
            <About4 />
            <About6 />
        </div>
    );
}

export default Landing;