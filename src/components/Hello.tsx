import * as React from "react";

interface HelloProps {
    name?: string;
    compiler: string;
    framework: string;
}

export const Hello: React.FC<HelloProps> = props => {
    return (
        <h1>
            Hello {props.name} from {props.compiler} and {props.framework}!
        </h1>
    );
};

// function
// export interface HelloProps {
//     compiler: string;
//     framework: string;
// }

// export const Hello = (props: HelloProps) => (
//     <h1>
//         Hello from {props.compiler} and {props.framework}!
//     </h1>
// );

//Class
// export interface HelloProps {
//     compiler: string;
//     framework: string;
// }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// export class Hello extends React.Component<HelloProps, {}> {
//     render() {
//         return (
//             <h1>
//                 Hello from {this.props.compiler} and {this.props.framework}!
//             </h1>
//         );
//     }
// }

//Update

// export const Hello : React.FunctionComponent<{name: string;}> = (props) => {
//     return <h1>Hello {props.name} from {props.compiler} and {props.framework}!</h1>;
// };

// interface Props {
//     name: string;
// }

// export const Hello: React.FunctionComponent<Props> = props => {
//     return (
//         <h1>
//             Hello {props.name} from {props.compiler} and {props.framework}!
//         </h1>
//     );
// };

// import * as React from "react";

// export const Hello: React.FunctionComponent<HelloProps> = props => {}
// export const Hello: React.FunctionComponent<{name: string, compiler:string, framework:string}> = (props) => {}
// export const Hello: React.FC = (props: HelloProps) => {}
// export const Hello = (props: HelloProps) => {}
