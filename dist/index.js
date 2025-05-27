import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { calcSuperEllipsePath, getSuperEllipsePathAsDataUri, Preset } from "superellipsejs";
import useMeasure from 'react-use-measure';
export function SuperEllipse(props) {
    const [ref, bounds] = useMeasure();
    return _jsx("div", { ...props, ref: ref, style: {
            ...props.style,
            ...getMaskStyle(bounds, props)
        }, children: props.children });
}
export function getMaskStyle(bounds, props) {
    const w = bounds.width;
    const h = bounds.height;
    const { r1 = Preset.iOS.r1, r2 = Preset.iOS.r2, p1, p2 } = props;
    const { dataUri } = getSuperEllipsePathAsDataUri(w, h, p1 !== undefined ? p1 : r1 * Math.min(w, h), p2 !== undefined ? p2 : r2 * Math.min(w, h));
    return {
        maskImage: `url("${dataUri}")`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        // maskSize: 'contain',
        WebkitMaskImage: `url("${dataUri}")`,
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        // WebkitMaskSize: 'contain'
    };
}
export const SuperEllipseImg = (props) => {
    const w = props.width;
    const h = props.height;
    const { r1 = Preset.iOS.r1, r2 = Preset.iOS.r2 } = props;
    const { strokeWidth = 0, strokeColor = 'rgba(255,255,255,0.5)', backgroundColor } = props;
    const path = calcSuperEllipsePath(w, h, r1 * Math.min(w, h), r2 * Math.min(w, h));
    const id = `super-ellipse-${w}-${h}-${r1}-${r2}`;
    return _jsxs("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, style: props.style, children: [_jsx("defs", { children: _jsx("clipPath", { id: id, children: _jsx("path", { fill: "#000", stroke: "none", d: path }) }) }), _jsxs("g", { clipPath: `url(#${id})`, children: [backgroundColor &&
                        _jsx("rect", { width: w, height: h, fill: backgroundColor }), _jsx("image", { href: props.href, width: w, height: h, preserveAspectRatio: "none" }), strokeWidth > 0 &&
                        _jsx("path", { stroke: strokeColor, strokeWidth: strokeWidth * 2, fill: "none", d: path })] })] });
};
export { Preset };
export default SuperEllipse;
