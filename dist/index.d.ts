import React, { CSSProperties } from "react";
import { Preset } from "superellipsejs";
export interface SuperEllipseProps {
    r1?: number;
    r2?: number;
    p1?: number;
    p2?: number;
}
interface Bounds {
    readonly width: number;
    readonly height: number;
}
export declare function SuperEllipse(props: SuperEllipseProps & React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function getMaskStyle(bounds: Bounds, props: SuperEllipseProps): CSSProperties;
export interface SuperEllipseImgProps {
    width: number;
    height: number;
    href: string;
    style?: CSSProperties;
    r1?: number;
    r2?: number;
    backgroundColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
}
export declare const SuperEllipseImg: (props: SuperEllipseImgProps) => import("react/jsx-runtime").JSX.Element;
export { Preset };
export default SuperEllipse;
//# sourceMappingURL=index.d.ts.map