class Calculator {
    constructor() {
        this.panelContents = "";
        this.memoryContents = 0;
        this.markContents = "";
        this.marks = ["+", "-", "*", "/"];
    }

    pressButton(b) {
        if (b === "C") {
            this.panelContents = "";
        } else if (this.marks.includes(b)) {
            this.memoryContents = parseFloat(this.panelContents);
            this.markContents = b;
            this.panelContents = "";
        } else if (b === "=") {
            if (this.markContents.length === 1) {
                if (this.markContents === "+") {
                    this.panelContents = (
                        this.memoryContents + parseFloat(this.panelContents)
                    ).toString();
                } else if (this.markContents === "-") {
                    this.panelContents = (
                        this.memoryContents - parseFloat(this.panelContents)
                    ).toString();
                } else if (this.markContents === "*") {
                    this.panelContents = (
                        this.memoryContents * parseFloat(this.panelContents)
                    ).toString();
                } else if (this.markContents === "|") {
                    this.panelContents = (
                        this.memoryContents / parseFloat(this.panelContents)
                    ).toString();
                }
            }
        } else {
            this.panelContents += b;
        }
    }

    getPanelContents() {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    }
}

module.exports = Calculator;
