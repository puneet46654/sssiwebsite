'use client';
import React, { useEffect, useRef, useState } from 'react';

type TimelineAlign = 'start' | 'middle' | 'end';

type TimelineMilestone = {
    id: number;
    date: string;
    title: string;
    cx: number;
    cy: number;
    align: TimelineAlign;
    dx: number;
    dy: number;
};

const CUSTOM_DESKTOP_PATH = 'M1437.81 0.00120927C1407.15 -0.0204576 1376.51 0.25038 1345.86 0.705383C1315.22 1.17122 1284.58 1.86456 1253.96 2.89373C1223.33 3.94457 1192.72 5.28792 1162.15 7.44377C1146.87 8.53795 1131.6 9.81629 1116.38 11.6038C1108.77 12.503 1101.17 13.5322 1093.61 14.8538C1089.83 15.5147 1086.06 16.2513 1082.3 17.1289C1078.56 18.0172 1074.81 19.0247 1071.13 20.4222C1069.3 21.1372 1067.48 21.9389 1065.74 23.0331C1064.04 24.1164 1062.26 25.5572 1061.5 27.6373C1061.33 28.1464 1061.22 28.6773 1061.22 29.2189C1061.22 29.6414 1061.22 30.0315 1061.29 30.4323C1061.38 31.234 1061.53 32.0248 1061.79 32.8048C1062.29 34.354 1063.09 35.8273 1064.07 37.1923C1066.06 39.9224 1068.73 42.2191 1071.59 44.2666C1074.46 46.3141 1077.55 48.1233 1080.73 49.7808C1087.11 53.1066 1093.82 55.9125 1100.63 58.5342C1107.46 61.145 1114.38 63.55 1121.34 65.8684C1149.18 75.1093 1177.71 83.0177 1204.58 92.9194C1211.29 95.4003 1217.85 98.022 1224.14 100.882C1230.41 103.742 1236.41 106.851 1241.67 110.383C1246.89 113.904 1251.36 117.912 1253.55 122.343C1254.64 124.542 1255.12 126.828 1254.92 129.103C1254.86 129.677 1254.78 130.241 1254.66 130.815C1254.55 131.291 1254.39 131.681 1254.16 132.104C1253.69 132.927 1252.93 133.74 1251.93 134.498C1249.9 136.036 1246.98 137.347 1243.86 138.431C1240.71 139.525 1237.29 140.424 1233.8 141.193C1226.79 142.742 1219.44 143.837 1212.03 144.747C1197.17 146.534 1182.01 147.542 1166.84 148.311C1136.46 149.795 1105.87 150.217 1075.31 150.423C1044.72 150.607 1014.11 150.477 983.496 150.326C922.254 150.001 860.966 149.47 799.601 150.109C768.926 150.445 738.22 151.062 707.514 152.341C676.824 153.652 646.088 155.504 615.505 159.057C600.222 160.867 584.969 163.088 569.916 166.294C562.398 167.908 554.926 169.783 547.607 172.112C540.32 174.463 533.125 177.236 526.531 180.963C519.998 184.646 513.959 189.521 510.724 195.609C509.106 198.621 508.289 201.871 508.212 205.045C508.181 208.068 508.489 210.993 509.214 213.95C510.616 219.833 513.682 225.521 517.918 230.601C522.14 235.704 527.486 240.2 533.31 244.187C545.019 252.171 558.546 258.216 572.366 263.448C586.232 268.648 600.561 272.993 614.997 276.947C643.915 284.812 673.373 291.139 702.723 297.4C732.073 303.64 761.392 309.696 790.126 316.662C804.485 320.15 818.674 323.877 832.494 328.07C846.299 332.273 859.764 336.931 872.229 342.456C884.646 347.982 896.155 354.438 904.644 362.238C913.18 369.995 918.048 379.182 918.048 388.78C918.095 398.747 915.167 408.692 909.482 417.879C903.812 427.087 895.601 435.581 885.833 443.196C876.049 450.823 864.864 457.681 852.878 463.856C846.915 466.965 840.722 469.89 834.389 472.696C828.088 475.513 821.602 478.156 815.023 480.713C801.881 485.815 788.308 490.441 774.488 494.72C760.683 499.021 746.602 502.921 732.381 506.594C703.925 513.928 674.837 520.157 645.471 525.736C616.106 531.305 586.417 536.158 556.589 540.524C496.904 549.245 436.586 556.005 376.037 561.562C315.489 567.109 254.678 571.421 193.775 574.801C163.316 576.48 132.841 577.921 102.336 579.112C71.8609 580.293 41.2629 581.279 10.9115 581.821H10.8037C4.68721 581.929 -0.150528 585.504 0.00354004 589.816C0.157608 594.117 5.2419 597.519 11.3584 597.41H11.42C42.3107 596.728 72.8932 595.601 103.583 594.29C134.243 592.958 164.872 591.387 195.47 589.567C256.665 585.916 317.769 581.323 378.672 575.483C439.559 569.633 500.262 562.57 560.472 553.502C590.577 548.963 620.543 543.926 650.278 538.162C679.998 532.377 709.517 525.931 738.528 518.315C753.026 514.502 767.416 510.44 781.59 505.965C795.765 501.513 809.739 496.67 823.374 491.308C830.183 488.621 836.932 485.837 843.526 482.847C850.135 479.878 856.637 476.769 862.938 473.443C875.587 466.835 887.574 459.425 898.235 451.018C908.881 442.611 918.095 433.035 924.519 422.44C930.975 411.845 934.318 400.264 934.133 388.683C934.071 382.703 932.485 376.658 929.542 371.003C926.599 365.347 922.301 360.104 917.186 355.478C906.909 346.172 893.921 339.12 880.487 333.194C866.975 327.29 852.831 322.48 838.503 318.179C824.159 313.9 809.6 310.151 794.979 306.652C765.721 299.686 736.202 293.728 706.867 287.618C677.548 281.497 648.306 275.333 620.019 267.771C605.891 263.979 592.01 259.808 578.806 254.922C565.649 250.026 553.061 244.392 542.693 237.383C537.531 233.884 532.94 230.049 529.427 225.846C525.884 221.653 523.419 217.114 522.248 212.38C521.647 210.029 521.37 207.57 521.385 205.208C521.416 203.009 521.955 200.864 523.018 198.838C525.129 194.775 529.366 191.124 534.712 188.08C540.043 185.025 546.344 182.512 552.938 180.367C559.563 178.222 566.527 176.434 573.645 174.885C587.881 171.776 602.671 169.555 617.57 167.735C647.413 164.149 677.81 162.178 708.223 160.758C738.667 159.372 769.203 158.635 799.77 158.18C860.905 157.292 922.147 157.584 983.419 157.66C1014.06 157.692 1044.71 157.692 1075.38 157.389C1106.06 157.064 1136.76 156.512 1167.48 154.887C1182.84 154.042 1198.22 152.958 1213.55 151.052C1221.21 150.077 1228.88 148.917 1236.48 147.206C1240.27 146.35 1244.06 145.342 1247.77 144.042C1251.47 142.732 1255.16 141.139 1258.37 138.723C1259.96 137.51 1261.37 136.058 1262.31 134.368C1262.78 133.534 1263.1 132.613 1263.28 131.768C1263.44 131.01 1263.55 130.241 1263.62 129.461C1263.87 126.362 1263.16 123.221 1261.7 120.339C1258.74 114.554 1253.32 109.939 1247.52 106.05C1241.65 102.16 1235.23 98.8995 1228.63 95.9311C1222.04 92.9628 1215.23 90.3086 1208.37 87.7952C1180.84 77.8177 1152.2 70.0176 1124.58 60.9825C1117.67 58.7292 1110.85 56.3892 1104.19 53.8758C1097.55 51.3516 1091.07 48.6758 1085.1 45.5991C1082.13 44.0607 1079.31 42.4249 1076.78 40.6482C1074.27 38.8715 1072.05 36.9432 1070.53 34.874C1069.76 33.8448 1069.19 32.7831 1068.83 31.7106C1068.65 31.169 1068.54 30.6273 1068.48 30.0856C1068.45 29.8148 1068.45 29.5331 1068.43 29.2839C1068.43 29.1431 1068.46 29.0023 1068.51 28.8614C1068.68 28.2981 1069.4 27.5398 1070.51 26.8356C1071.62 26.1206 1073.04 25.4706 1074.55 24.8747C1077.6 23.6831 1081.02 22.7297 1084.52 21.8847C1088.02 21.0397 1091.62 20.3139 1095.27 19.6639C1102.56 18.353 1110 17.313 1117.49 16.3813C1132.46 14.5397 1147.61 13.1855 1162.79 12.0263C1193.15 9.72962 1223.69 8.23461 1254.22 7.0321C1284.78 5.85125 1315.36 5.00625 1345.96 4.37791C1376.55 3.77124 1407.17 3.34874 1437.77 3.2079C1439.01 3.2079 1440.02 2.49289 1440 1.61539C1440 0.748713 1438.98 0.0445439 1437.75 0.0445439L1437.81 0.00120927Z';

const desktopMilestones: TimelineMilestone[] = [
    {
        id: 1,
        date: 'Jan, 2014',
        title: 'Ignition of idea',
        cx: 1082,
        cy: 17,
        align: 'start',
        dx: -10,
        dy: -45, 
    },
    {
        id: 2,
        date: 'May, 2018',
        title: 'Successful animal trials',
        cx: 1241,
        cy: 110,
        align: 'start',
        dx: 15,
        dy: -45, 
    },
    {
        id: 3,
        date: 'Dec, 2020',
        title: 'Successful clinical trials\nRajiv Gandhi Cancer Institute,\nNew Delhi, INDIA',
        cx: 1075,
        cy: 150,
        align: 'start',
        dx: 0,
        dy: 45,
    },
    {
        id: 4,
        date: 'Apr, 2021',
        title: 'First installation\nRajiv Gandhi Cancer Institute,\nNew Delhi, INDIA',
        cx: 799,
        cy: 150,
        align: 'start',
        dx: -10,
        dy: -90, 
    },
    {
        id: 5,
        date: 'Jan, 2024',
        title: 'SMRSC 2024,\nFirst Global SS Innovations\nMulti-Speciality Robotic Surgery\nConference',
        cx: 526,
        cy: 180,
        align: 'start',
        dx: -170,
        dy: -110, 
    },
    {
        id: 6,
        date: 'Apr, 2024',
        title: 'First 1000 Surgeries\nCompleted',
        cx: 614,
        cy: 276,
        align: 'middle',
        dx: 0,
        dy: 40,
    },
    {
        id: 7,
        date: 'Jul, 2024',
        title: 'First International\nInstallation\nB&B Hospital, Gwarko, Nepal',
        cx: 832,
        cy: 328,
        align: 'middle',
        dx: 0,
        dy: -90, 
    },
    {
        id: 8,
        date: 'Nov, 2024',
        title: 'Mantra 3.0 Launch',
        cx: 909,
        cy: 417,
        align: 'start',
        dx: 15,
        dy: 35,
    },
    {
        id: 9,
        date: 'Dec, 2024',
        title: 'Telesurgery & Teleproctoring\nApproval from CDSCO for\nSSI Mantra 3',
        cx: 774,
        cy: 494,
        align: 'start',
        dx: 0,
        dy: 35,
    },
    {
        id: 10,
        date: 'Jan, 2025',
        title: "World's First Robotic\nCardiac Telesurgery",
        cx: 556,
        cy: 540,
        align: 'start',
        dx: 0,
        dy: 35,
    },
    {
        id: 11,
        date: 'Apr, 2025',
        title: 'Officially listed on the\nNASDAQ capital market',
        cx: 195,
        cy: 589,
        align: 'start',
        dx: 0,
        dy: 35,
    },
];

const mobileMilestones: TimelineMilestone[] = [
    {
        id: 1,
        date: 'Jan, 2014',
        title: 'Ignition of idea',
        cx: 400,
        cy: 80,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 2,
        date: 'May, 2018',
        title: 'Successful animal trials',
        cx: 200,
        cy: 240,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 3,
        date: 'Dec, 2020',
        title: 'Successful clinical trials\nRajiv Gandhi Cancer Institute,\nNew Delhi, INDIA',
        cx: 600,
        cy: 400,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 4,
        date: 'Apr, 2021',
        title: 'First installation\nRajiv Gandhi Cancer Institute,\nNew Delhi, INDIA',
        cx: 200,
        cy: 560,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 5,
        date: 'Jan, 2024',
        title: 'SMRSC 2024,\nFirst Global SS Innovations\nMulti-Speciality Robotic Surgery\nConference',
        cx: 600,
        cy: 720,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 6,
        date: 'Apr, 2024',
        title: 'First 1000 Surgeries\nCompleted',
        cx: 200,
        cy: 880,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 7,
        date: 'Jul, 2024',
        title: 'First International\nInstallation\nB&B Hospital, Gwarko, Nepal',
        cx: 600,
        cy: 1040,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 8,
        date: 'Nov, 2024',
        title: 'Mantra 3.0 Launch',
        cx: 200,
        cy: 1200,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 9,
        date: 'Dec, 2024',
        title: 'Telesurgery & Teleproctoring\nApproval from CDSCO for\nSSI Mantra 3',
        cx: 600,
        cy: 1360,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 10,
        date: 'Jan, 2025',
        title: "World's First Robotic\nCardiac Telesurgery",
        cx: 200,
        cy: 1520,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
    {
        id: 11,
        date: 'Apr, 2025',
        title: 'Officially listed on the\nNASDAQ capital market',
        cx: 400,
        cy: 1680,
        align: 'middle',
        dx: 0,
        dy: 30,
    },
];

function catmullRom2bezier(points: Array<{ x: number; y: number }>, tension = 1.0) {
    if (points.length < 2) return '';
    let d = `M ${points[0].x} ${points[0].y} `;
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = i === 0 ? { x: points[0].x - (points[1].x - points[0].x), y: points[0].y - (points[1].y - points[0].y) } : points[i - 1];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = i + 2 < points.length ? points[i + 2] : { x: p2.x + (p2.x - p1.x), y: p2.y + (p2.y - p1.y) };
        const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension;
        const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension;
        const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension;
        const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension;
        d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
    }
    return d;
}

const ANIMATION_DURATION_MS = 8500;
const MAX_SPARKLES = 40;

const easeInOutQuart = (t: number) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
};

const HistoryTimelineSection = () => {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const svgRef = useRef<SVGSVGElement | null>(null);
    const pathDataRef = useRef<SVGPathElement | null>(null);
    const backgroundPathRef = useRef<SVGPathElement | null>(null);
    const traceLineRef = useRef<SVGPathElement | null>(null);
    const leadIndicatorRef = useRef<SVGCircleElement | null>(null);
    const sparkleRefs = useRef<Array<SVGUseElement | null>>([]);
    const triggerLengthsRef = useRef<number[]>([]);
    const sparkles = useRef(Array.from({ length: MAX_SPARKLES }, () => ({
        active: false,
        x: 0,
        y: 0,
        scale: 0,
        rot: 0,
        life: 0,
        maxLife: 1,
    })));

    useEffect(() => {
        setMounted(true);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const milestones = isMobile ? mobileMilestones : desktopMilestones;
    const viewBox = isMobile ? '0 0 800 1850' : '0 0 1440 680'; 
    const dotR = isMobile ? 12 : 6;
    const innerDotR = isMobile ? 6 : 3;
    const sparkleScale = isMobile ? 2.2 : 1.2;

    useEffect(() => {
        if (!mounted || !svgRef.current || !pathDataRef.current || !traceLineRef.current || !leadIndicatorRef.current) {
            return;
        }
        const exactPath = isMobile
            ? catmullRom2bezier(mobileMilestones.map((m) => ({ x: m.cx, y: m.cy })), 0.95)
            : CUSTOM_DESKTOP_PATH;
            
        pathDataRef.current.setAttribute('d', exactPath);
        traceLineRef.current.setAttribute('d', exactPath);
        if (backgroundPathRef.current) {
            backgroundPathRef.current.setAttribute('d', exactPath);
        }
        const totalLength = pathDataRef.current.getTotalLength();
        const animatedLength = isMobile ? totalLength : totalLength / 2;
        traceLineRef.current.style.strokeDasharray = `${totalLength}`;
        traceLineRef.current.style.strokeDashoffset = `${totalLength}`;
        
        triggerLengthsRef.current = milestones.map((ms, index) => {
            let targetLength = 0;
            let pt = { x: 0, y: 0 };
            let minDist = Infinity;
            for (let l = 0; l <= animatedLength; l += 5) {
                const checkPt = pathDataRef.current!.getPointAtLength(l);
                const distance = Math.hypot(checkPt.x - ms.cx, checkPt.y - ms.cy);
                if (distance < minDist) {
                    minDist = distance;
                    targetLength = l;
                    pt = checkPt;
                }
            }
            const group = document.getElementById(`milestone-group-${index}`);
            if (group) {
                group.classList.remove('is-active');
                group.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
                const line = group.querySelector('.milestone-connector');
                if (line) {
                    // Logic to find exact bottom/center points so lines never cross paragraphs
                    let endX = 0;
                    if (ms.align === 'start') {
                        endX = ms.dx < -100 ? ms.dx + 80 : ms.dx + 20; 
                    } else if (ms.align === 'end') {
                        endX = ms.dx > 100 ? ms.dx - 80 : ms.dx - 20;
                    } else {
                        endX = 0;
                    }
                    
                    let endY;
                    if (ms.dy < 0) {
                        const titleLines = ms.title.split('\n').length;
                        const lineHeight = isMobile ? 22.4 : 16.8; 
                        const padding = isMobile ? 8 : 6;
                        
                        const textBottomY = ms.dy + (titleLines * lineHeight) + padding;
                        endY = Math.min(-10, textBottomY + (isMobile ? 12 : 8)); 
                    } else {
                        endY = ms.dy - (isMobile ? 22 : 16);
                    }

                    line.setAttribute('x2', `${endX}`);
                    line.setAttribute('y2', `${endY}`);
                }
                const textGroup = group.querySelector('.milestone-text-group');
                if (textGroup) {
                    textGroup.setAttribute('transform', `translate(${ms.dx}, ${ms.dy})`);
                }
            }
            return targetLength;
        });
        
        let animationFrameId: number | null = null;
        let startTime: number | null = null;
        const activatedNodes = new Array(milestones.length).fill(false);
        let sparkleIndex = 0;
        
        const renderLoop = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const rawProgress = Math.min(elapsed / ANIMATION_DURATION_MS, 1.0);
            const easedProgress = easeInOutQuart(rawProgress);
            const currentLength = easedProgress * animatedLength;
            traceLineRef.current!.style.strokeDashoffset = `${totalLength - currentLength}`;
            
            if (pathDataRef.current && leadIndicatorRef.current) {
                if (rawProgress < 0.99) {
                    const currentPt = pathDataRef.current.getPointAtLength(currentLength);
                    leadIndicatorRef.current.setAttribute('transform', `translate(${currentPt.x}, ${currentPt.y})`);
                    leadIndicatorRef.current.style.opacity = '1';
                    if (rawProgress > 0.02 && Math.random() > 0.4) {
                        const sp = sparkles.current[sparkleIndex];
                        const spread = isMobile ? 50 : 35;
                        sp.active = true;
                        sp.x = currentPt.x + (Math.random() - 0.5) * spread;
                        sp.y = currentPt.y + (Math.random() - 0.5) * spread;
                        sp.scale = Math.random() * 0.8 + 0.4;
                        sp.rot = Math.random() * 360;
                        sp.maxLife = Math.random() * 40 + 20;
                        sp.life = sp.maxLife;
                        sparkleIndex = (sparkleIndex + 1) % MAX_SPARKLES;
                    }
                } else {
                    leadIndicatorRef.current.style.opacity = '0';
                }
            }
            sparkles.current.forEach((sp, i) => {
                if (!sp.active) return;
                sp.life -= 1;
                sp.y -= isMobile ? 0.6 : 0.3;
                sp.rot += 1.5;
                const domNode = sparkleRefs.current[i];
                if (domNode) {
                    if (sp.life <= 0) {
                        sp.active = false;
                        domNode.style.opacity = '0';
                    } else {
                        const lifeRatio = sp.life / sp.maxLife;
                        const twinkleScale = sp.scale * Math.sin(lifeRatio * Math.PI);
                        domNode.setAttribute('transform', `translate(${sp.x}, ${sp.y}) scale(${twinkleScale}) rotate(${sp.rot})`);
                        domNode.style.opacity = (lifeRatio * 0.9).toString();
                    }
                }
            });
            triggerLengthsRef.current.forEach((triggerLength, index) => {
                if (!activatedNodes[index] && currentLength >= triggerLength) {
                    activatedNodes[index] = true;
                    const group = document.getElementById(`milestone-group-${index}`);
                    if (group) group.classList.add('is-active');
                }
            });
            if (rawProgress < 1.0 || sparkles.current.some((s) => s.active)) {
                animationFrameId = requestAnimationFrame(renderLoop);
            }
        };
        const timeoutId = window.setTimeout(() => {
            animationFrameId = requestAnimationFrame(renderLoop);
        }, 500);
        return () => {
            window.clearTimeout(timeoutId);
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isMobile, mounted, milestones]);

    if (!mounted) {
        return <div className="corporate-timeline-container" />;
    }
    
    return (
        <>
            <style>
                {`
          .corporate-timeline-container {
            background-color: #000;
            color: white;
            min-height: 100vh;
            width: 100%;
            padding: 80px 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .timeline-content {
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            padding-left: 24px;
            padding-right: 24px;
          }

          .timeline-header {
            font-size: 2.5rem;
            font-weight: 500;
            margin-bottom: 0;
            color: #ffffff;
            text-align: left;
            width: 100%;
            opacity: 0;
            animation: softFadeIn 2s ease-out 0.2s forwards;
          }

          @media (min-width: 1024px) {
            .timeline-content {
              padding-left: 40px;
              padding-right: 40px;
            }
          }

          @media (max-width: 768px) {
            .corporate-timeline-container {
              padding: 64px 0;
            }

            .timeline-header {
              font-size: 2rem;
              text-align: left;
              margin-bottom: 1rem;
            }
          }

          @keyframes softFadeIn {
            0% {
              opacity: 0;
              transform: translateY(-15px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .timeline-svg-wrapper {
            width: 100%;
            max-width: none;
            position: relative;
          }

          .timeline-svg {
            width: 100%;
            height: auto;
            overflow: visible;
          }

          /* --- CONNECTOR LINES --- */
          .milestone-connector {
            stroke: #374151;
            stroke-width: 1;
            /* Updated to 250 so longer, dynamic lines animate fully */
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
            transition: stroke-dashoffset 0.6s ease-out;
          }

          .is-active .milestone-connector {
            stroke-dashoffset: 0;
            stroke: #00A09C;
            opacity: 0.6;
          }

          /* --- NODE DOTS --- */
          .milestone-dot {
            opacity: 0;
            transform: scale(0.5);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            fill: #00A09C;
            stroke: #000000;
            stroke-width: 3px;
          }

          .is-active .milestone-dot {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 0 6px rgba(0, 160, 156, 0.6));
          }

          /* --- TEXT BLOCKS --- */
          .milestone-text-group {
            opacity: 0;
            transition: opacity 0.6s ease-out;
            transition-delay: 0.2s;
          }

          .is-active .milestone-text-group {
            opacity: 1;
          }

          .desktop-mode .date-text {
            font-size: 14px;
            font-weight: 600;
            fill: #ffffff;
            letter-spacing: 0.2px;
          }

          .desktop-mode .title-text {
            font-size: 12px;
            font-weight: 400;
            fill: #D1D5DB;
          }

          .mobile-mode .date-text {
            font-size: 20px;
            font-weight: 600;
            fill: #ffffff;
          }

          .mobile-mode .title-text {
            font-size: 16px;
            font-weight: 400;
            fill: #D1D5DB;
          }

          /* --- LEAD INDICATOR --- */
          .lead-indicator {
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          /* --- SPARKLES --- */
          .twinkle-sparkle {
            pointer-events: none;
            will-change: transform, opacity;
            mix-blend-mode: screen;
          }
        `}
            </style>

            <div className={`corporate-timeline-container ${isMobile ? 'mobile-mode' : 'desktop-mode'}`}>
                <div className="timeline-content">
                    <h2 className="timeline-header">Our Journey so far</h2>

                    <div className="timeline-svg-wrapper">
                        <svg ref={svgRef} viewBox={viewBox} className="timeline-svg" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id="desktop-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#000000" />
                                    <stop offset="51.92%" stopColor="#00A09C" />
                                    <stop offset="75.96%" stopColor="#00504E" />
                                    <stop offset="100%" stopColor="#000000" />
                                </linearGradient>

                                <linearGradient id="mobile-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00A09C" />
                                    <stop offset="52%" stopColor="#00A09C" />
                                    <stop offset="76%" stopColor="#00504E" />
                                    <stop offset="100%" stopColor="#00302E" />
                                </linearGradient>

                                <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation={isMobile ? '6' : '3'} result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="sparkle-glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation={isMobile ? '4' : '2'} result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <g id="sparkle-shape" transform={`scale(${sparkleScale})`}>
                                    <path d="M0,-8 C0,-1 1,0 8,0 C1,0 0,1 0,8 C0,1 -1,0 -8,0 C-1,0 0,-1 0,-8 Z" fill="#00A09C" />
                                    <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                                </g>
                            </defs>

                            <path ref={pathDataRef} fill="transparent" stroke="none" />

                            <path ref={backgroundPathRef} fill={isMobile ? 'transparent' : 'url(#desktop-gradient)'} stroke={isMobile ? '#1f2937' : 'none'} strokeWidth={isMobile ? '6' : '0'} strokeDasharray={isMobile ? '8 16' : 'none'} strokeLinecap="round" opacity={isMobile ? 1 : 0.25} />

                            <path ref={traceLineRef} fill="transparent" stroke={isMobile ? 'url(#mobile-gradient)' : '#00A09C'} strokeWidth={isMobile ? '10' : '3'} strokeLinecap="round" filter="url(#soft-glow)" style={{ transition: 'none', pointerEvents: 'none' }} />

                            <g id="sparkle-layer">
                                {Array.from({ length: MAX_SPARKLES }).map((_, i) => (
                                    <use key={i} href="#sparkle-shape" ref={(el) => {
                                        sparkleRefs.current[i] = el;
                                    }} className="twinkle-sparkle" opacity="0" filter="url(#sparkle-glow)" />
                                ))}
                            </g>

                            <g ref={leadIndicatorRef} className="lead-indicator">
                                <circle cx="0" cy="0" r={dotR} fill="#ffffff" filter="url(#soft-glow)" />
                                <circle cx="0" cy="0" r={innerDotR} fill="#ffffff" />
                            </g>

                            {milestones.map((ms, index) => (
                                <g id={`milestone-group-${index}`} key={`milestone-${ms.id}`}>
                                    <line x1="0" y1="0" x2="0" y2="0" className="milestone-connector" />

                                    <circle className="milestone-dot" cx="0" cy="0" r={dotR} />

                                    <g className="milestone-text-group" textAnchor={ms.align}>
                                        <text x="0" y="0">
                                            <tspan className="date-text" x="0" dy="0">
                                                {ms.date}
                                            </tspan>

                                            {ms.title.split('\n').map((line, i) => (
                                                <tspan className="title-text" x="0" dy="1.4em" key={i}>
                                                    {line}
                                                </tspan>
                                            ))}
                                        </text>
                                    </g>
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoryTimelineSection;