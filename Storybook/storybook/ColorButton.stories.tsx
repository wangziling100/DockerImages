import React from "react";
import { storiesOf } from "@storybook/react";
import ColorButton from "../components/ColorButton";
import "../css/tailwind.css";
storiesOf("ColorButton", module)
    .add("red",
        () => <div className="bg-gray-500 text-red-500">test </div>
    )
    .add("blue",
        () => <ColorButton color="blue" />
    )
