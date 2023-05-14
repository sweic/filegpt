import { createSignal } from "solid-js";

export const [settings, setSettings] = createSignal(false);
export const [upload, setUpload] = createSignal(false);
export const [create, setCreate] = createSignal(false);
export const [visible, setVisible] = createSignal(false);
export const [confirm, setConfirm] = createSignal(false);
export const [del, setDelete] = createSignal(false);
export const [confirmFile, setConfirmFile] = createSignal(false);
export const [delFile, setDeleteFile] = createSignal(false);
export const [rename, setRename] = createSignal("");
export const [renameFile, setRenameFile] = createSignal("");
export const [withHistory, setWithHistory] = createSignal(false);
export const [currentQuery, setCurrentQuery] = createSignal("");
export const [currentFile, setCurrentFile] = createSignal<File | null>(null);
export const [fileName, setFileName] = createSignal("");
export const [currentFileId, setCurrentFileId] = createSignal("");
