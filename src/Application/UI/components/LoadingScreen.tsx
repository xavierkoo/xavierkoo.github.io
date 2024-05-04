import React, { useCallback, useEffect, useState } from 'react';
import eventBus from '../EventBus';

type LoadingProps = {};

const LoadingScreen: React.FC<LoadingProps> = () => {
    const [progress, setProgress] = useState(0);
    const [toLoad, setToLoad] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [overlayOpacity, setLoadingOverlayOpacity] = useState(1);
    const [loadingTextOpacity, setLoadingTextOpacity] = useState(1);
    const [startPopupOpacity, setStartPopupOpacity] = useState(0);
    const [firefoxPopupOpacity, setFirefoxPopupOpacity] = useState(0);
    const [webGLErrorOpacity, setWebGLErrorOpacity] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);

    const [showBiosInfo, setShowBiosInfo] = useState(false);
    const [showLoadingResources, setShowLoadingResources] = useState(false);
    const [doneLoading, setDoneLoading] = useState(false);
    const [firefoxError, setFirefoxError] = useState(false);
    const [webGLError, setWebGLError] = useState(false);
    const [counter, setCounter] = useState(0);
    const [resources] = useState<string[]>([]);
    const [mobileWarning, setMobileWarning] = useState(window.innerWidth < 768);
    const [standby, setStandby] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setStandby(false);
        }, 3000);
    }, []);

    const onResize = () => {
        if (window.innerWidth < 768) {
            setMobileWarning(true);
        } else {
            setMobileWarning(false);
        }
    };

    window.addEventListener('resize', onResize);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('debug')) {
            start();
        }
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            setFirefoxError(true);
        } else if (!detectWebGLContext()) {
            setWebGLError(true);
        } else {
            setShowBiosInfo(true);
        }
    }, []);

    useEffect(() => {
        eventBus.on('loadedSource', (data) => {
            setProgress(data.progress);
            setToLoad(data.toLoad);
            setLoaded(data.loaded);
            resources.push(
                `Loaded ${data.sourceName}${getSpace(
                    data.sourceName
                )} ... ${Math.round(data.progress * 100)}%`
            );
            if (resources.length > 8) {
                resources.shift();
            }
        });
    }, []);

    useEffect(() => {
        setShowLoadingResources(true);
        setCounter(counter + 1);
    }, [loaded]);

    useEffect(() => {
        if (progress >= 1 && !firefoxError && !webGLError) {
            setDoneLoading(true);

            setTimeout(() => {
                setLoadingTextOpacity(0);
                setTimeout(() => {
                    setStartPopupOpacity(1);
                }, 500);
            }, 3500);
        }
    }, [progress]);

    useEffect(() => {
        if (firefoxError) {
            setTimeout(() => {
                setFirefoxPopupOpacity(1);
            }, 500);
        }
    }, [firefoxError]);

    useEffect(() => {
        if (webGLError) {
            setTimeout(() => {
                setWebGLErrorOpacity(1);
            }, 500);
        }
    }, [webGLError]);

    const start = useCallback(() => {
        setLoadingOverlayOpacity(0);
        eventBus.dispatch('loadingScreenDone', {});
        const ui = document.getElementById('ui');
        if (ui) {
            ui.style.pointerEvents = 'none';
        }
    }, []);

    const goToGithub = () => {
        window.open('https://github.com/xavierkoo');
    }

    const goToMedium = () => {
        window.open('https://medium.com/@xavier2812');
    }

    const goToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/xavier-koo-a59581132/');
    }

    useEffect(() => {
        if (!mobileWarning) { // Only set up keyboard events for non-mobile devices
            const handleKeyPress = (event: KeyboardEvent) => {
                switch (event.key) {
                    case 'Enter':
                        if (selectedOption === 0) start();
                        else if (selectedOption === 1) goToGithub();
                        else if (selectedOption === 2) goToMedium();
                        else if (selectedOption === 3) goToLinkedIn();
                        break;
                    case 'ArrowUp':
                        setSelectedOption((prevOption) => (prevOption > 0 ? prevOption - 1 : 3));
                        break;
                    case 'ArrowDown':
                        setSelectedOption((prevOption) => (prevOption < 3 ? prevOption + 1 : 0));
                        break;
                }
            };
            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        }
    }, [mobileWarning, selectedOption]);


    const getSpace = (sourceName: string) => {
        let spaces = '';
        for (let i = 0; i < 24 - sourceName.length; i++) spaces += '\xa0';
        return spaces;
    };

    const getCurrentDate = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        // add leading zero
        const monthFormatted = month < 10 ? `0${month}` : month;
        const dayFormatted = day < 10 ? `0${day}` : day;
        return `${monthFormatted}/${dayFormatted}/${year}`;
    };

    const detectWebGLContext = () => {
        var canvas = document.createElement('canvas');

        // Get WebGLRenderingContext from canvas element.
        var gl =
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl');
        // Report the result.
        if (gl && gl instanceof WebGLRenderingContext) {
            return true;
        }
        return false;
    };

    return (
        <div
            style={Object.assign({}, styles.overlay, {
                opacity: overlayOpacity,
                transform: `scale(${overlayOpacity === 0 ? 1.1 : 1})`,
            })}
        >
            {startPopupOpacity === 0 && loadingTextOpacity === 0 && (
                <div style={styles.blinkingContainer}>
                    <span className="blinking-cursor" />
                </div>
            )}
            {!firefoxError && !webGLError && (
                <div
                    style={Object.assign({}, styles.overlayText, {
                        opacity: loadingTextOpacity,
                    })}
                >
                    <div
                        style={styles.header}
                        className="loading-screen-header"
                    >
                        <div style={styles.logoContainer}>
                            <div>
                                <p style={styles.green}>
                                    <b>Xavier Koo,</b>{' '}
                                </p>
                                <p style={styles.green}>
                                    <b>Xavier Koo Pte. Ltd.</b>
                                </p>
                            </div>
                        </div>
                        <div style={styles.headerInfo}>
                            <p>Released: 28/12/1998</p>
                            <p>XKBIOS (C)2000 Xavier Koo Pte. Ltd.,</p>
                        </div>
                    </div>
                    <div style={styles.body} className="loading-screen-body">
                        <p>SMU SCIS 2021-2025 Special Utility</p>
                        <div style={styles.spacer} />
                        {showBiosInfo && (
                            <>
                                <p>HSP Showcase(tm) XX 113</p>
                                <p>Checking RAM : {14000} OK</p>
                                <div style={styles.spacer} />
                                <div style={styles.spacer} />
                                {showLoadingResources ? (
                                    progress == 1 ? (
                                        <p>FINISHED LOADING RESOURCES</p>
                                    ) : (
                                        <p className="loading">
                                            LOADING RESOURCES ({loaded}/
                                            {toLoad === 0 ? '-' : toLoad})
                                        </p>
                                    )
                                ) : (
                                    <p className="loading">WAIT</p>
                                )}
                            </>
                        )}
                        <div style={styles.spacer} />
                        <div style={styles.resourcesLoadingList}>
                            {resources.map((sourceName) => (
                                <p key={sourceName}>{sourceName}</p>
                            ))}
                        </div>
                        <div style={styles.spacer} />
                        {showLoadingResources && doneLoading && (
                            <p>
                                All Content Loaded, launching{' '}
                                <b style={styles.green}>
                                    'Xavier Koo's Developer Portfolio'
                                </b>{' '}
                                V1.0
                            </p>
                        )}
                        <div style={styles.spacer} />
                        <span className="blinking-cursor" />
                    </div>
                    <div
                        style={styles.footer}
                        className="loading-screen-footer"
                    >
                        <p>
                            Press <b>DEL</b> to enter SETUP , <b>ESC</b> to skip
                            memory test
                        </p>
                        <p>{getCurrentDate()}</p>
                        <p>Credits: https://github.com/henryjeff/portfolio-website</p>
                    </div>
                </div>
            )}
            <div
                style={Object.assign({}, styles.popupContainer, {
                    opacity: startPopupOpacity,
                })}
            >
                <div style={styles.startPopup}>
                    <p>XAVIER KOO'S DEVELOPER PORTFOLIO</p>
                    {mobileWarning && (
                        <>
                            <br />
                            <b>
                                <p style={styles.warning}>
                                    WARNING: This experience is best viewed on
                                </p>
                                <p style={styles.warning}>
                                    a desktop or laptop computer.
                                </p>
                            </b>
                            <br />
                        </>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '16px' }}>
                        <p id="goToPortfolio" 
                        style={{ color: selectedOption === 0 ? 'black' : '#04cc04', backgroundColor: selectedOption === 0 ? '#04cc04' : 'transparent', padding: '8px 16px' }}
                        onClick={() => { setSelectedOption(0); start(); }}
                        >
                            Go to Portfolio
                        </p>
                        <p style={{ color: selectedOption === 1 ? 'black' : '#04cc04', backgroundColor: selectedOption === 1 ? '#04cc04' : 'transparent', padding: '8px 16px' }}
                        onClick={() => { setSelectedOption(1); goToGithub(); }}
                        >
                            Go to Github
                        </p>
                        <p style={{ color: selectedOption === 2 ? 'black' : '#04cc04', backgroundColor: selectedOption === 2 ? '#04cc04' : 'transparent', padding: '8px 16px' }}
                        onClick={() => { setSelectedOption(2); goToMedium(); }}
                        >
                            Go to Dev Logs
                        </p>
                        <p style={{ color: selectedOption === 3 ? 'black' : '#04cc04', backgroundColor: selectedOption === 3 ? '#04cc04' : 'transparent', padding: '8px 16px' }}
                        onClick={() => { setSelectedOption(3); goToLinkedIn(); }}
                        >
                            Go to LinkedIn
                        </p>
                        <br/>
                        <hr style={{ width: '100%', margin: '8px 0', borderColor: '#04cc04', borderStyle: 'dashed' }} />
                        {!mobileWarning && <p><b>↑↓</b>:Move &nbsp;&nbsp;&nbsp;&nbsp;<b>ENTER</b>:Accept</p>}
                    </div>
                </div>
            </div>
            {firefoxError && (
                <div
                    style={Object.assign({}, styles.popupContainer, {
                        opacity: firefoxPopupOpacity,
                    })}
                >
                    <div style={styles.startPopup}>
                        <p>
                            <b style={{ color: 'red' }}>FATAL ERROR:</b> Firefox
                            Detected
                        </p>
                    </div>
                </div>
            )}
            {webGLError && (
                <div
                    style={Object.assign({}, styles.popupContainer, {
                        opacity: webGLErrorOpacity,
                    })}
                >
                    <div style={styles.startPopup}>
                        <p>
                            <b style={{ color: 'red' }}>CRITICAL ERROR:</b> No
                            WebGL Detected
                        </p>
                        <div style={styles.spacer} />
                        <div style={styles.spacer} />

                        <p>WebGL is required to run this site.</p>
                        <p>
                            Please enable it or switch to a browser which
                            supports WebGL
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles: StyleSheetCSS = {
    overlay: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        transition: 'opacity 0.2s, transform 0.2s',
        MozTransition: 'opacity 0.2s, transform 0.2s',
        WebkitTransition: 'opacity 0.2s, transform 0.2s',
        OTransition: 'opacity 0.2s, transform 0.2s',
        msTransition: 'opacity 0.2s, transform 0.2s',

        transitionTimingFunction: 'ease-in-out',
        MozTransitionTimingFunction: 'ease-in-out',
        WebkitTransitionTimingFunction: 'ease-in-out',
        OTransitionTimingFunction: 'ease-in-out',
        msTransitionTimingFunction: 'ease-in-out',

        boxSizing: 'border-box',
        fontSize: 16,
        letterSpacing: 0.8,
    },

    spacer: {
        height: 16,
    },
    header: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
    },
    popupContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    warning: {
        color: 'yellow',
    },
    blinkingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        boxSizing: 'border-box',
        padding: 48,
    },
    startPopup: {
        backgroundColor: 'black',
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 500,
        // alignItems: 'center',
    },
    headerInfo: {
        marginLeft: 64,
    },
    red: {
        color: '#00ff00',
    },
    link: {
        // textDecoration: 'none',
        color: '#4598ff',
        cursor: 'pointer',
    },
    overlayText: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    body: {
        flex: 1,
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: 'column',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    resourcesLoadingList: {
        display: 'flex',
        paddingLeft: 32,
        paddingBottom: 32,
        flexDirection: 'column',
    },
    logoImage: {
        width: 64,
        height: 42,
        imageRendering: 'pixelated',
        marginRight: 16,
    },
    footer: {
        boxSizing: 'border-box',
        width: '100%',
    },
};

export default LoadingScreen;
