import prompt from "prompt";
import promptQRCode from "../../prompts-schema/schema-qrcode.js";
import handle from "../../services/qr-code/handle.js"

async function createQRCode() {
    prompt.get(promptQRCode, handle);
    prompt.start();

}

export default createQRCode;