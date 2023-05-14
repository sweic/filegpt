import { createSignal } from "solid-js";

export default function useLocalStorage<T extends object>(key: string) {
  const storage = window.localStorage;
  const initialValue = JSON.parse(storage.getItem(key) ?? "{}").value;

  const [value, _setValue] = createSignal<T>(initialValue);

  const setValue = (val: T): T => {
    storage.setItem(key, JSON.stringify(val));
    _setValue(val as any);
    return val;
  };

  return [value, setValue];
}
