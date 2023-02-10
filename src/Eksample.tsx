import {Button} from "@navikt/ds-react";
import "@navikt/ds-css";
import React from "react";

export default function Example(props: { onClick: () => void, loading: boolean }) {
    return <div style={{border: "solid red 10px"}}>
        <Button onClick={props.onClick}>trykk på meg</Button><Button loading={props.loading}>maybe loading</Button>
    </div>;
}
