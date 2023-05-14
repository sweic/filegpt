import { createSignal } from "solid-js";

export const [chatIsLoading, setChatIsLoading] = createSignal(false);

export const [uploadIsLoading, setUploadIsLoading] = createSignal(false);

export const globalIsLoading = () => chatIsLoading() || uploadIsLoading();
