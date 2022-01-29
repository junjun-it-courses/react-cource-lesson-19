import React from "react";

class HtmlRender extends React.Component {
    render() {
        const htmlString = 'This <i>text</i> should be rendered <b>"as is"</b>';
        return (
            <ul>
                <li dangerouslySetInnerHTML={{ __html: htmlString }} />
                <li>{htmlString}</li>
            </ul>
        );
    }
}

export default HtmlRender