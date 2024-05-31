import * as React from "react";
import { lorem, address, names } from "./data";
import { ElementType, Fragment } from "react";

export type CountryType = "FR" | "US" | "UK" | "DE" | "IT" | "NL";

export type RequireExactlyOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType
> = {
    [Key in KeysType]: Required<Pick<ObjectType, Key>> &
        Partial<Record<Exclude<KeysType, Key>, never>>;
}[KeysType] &
    Omit<ObjectType, KeysType>;

export interface ILoremProps {
    words?: number;
    chars?: number;
    tag?: ElementType;
}

export function Lorem({
    words,
    chars,
    tag,
}: RequireExactlyOne<ILoremProps, "words" | "chars">) {
    // if (import.meta.env.MODE === "development") {
    //     console.log(
    //         "[react-placeholder] Reminder: you left a placeholder in your code."
    //     );
    // }

    const len = words || chars;
    if (!len) {
        console.error(
            "You must provide a `words` or `chars` prop to the Lorem component."
        );
        return null;
    }
    let axe;
    if (words) axe = " ";
    if (chars) axe = "";

    let wordArr = lorem.split(axe);
    while (wordArr.length < len) {
        wordArr = wordArr.concat(lorem.split(axe));
    }
    const newText = wordArr.slice(0, words || chars).join(axe);

    const Tag = tag || Fragment;
    return <Tag>{newText}</Tag>;
}

export function Address({
    country,
    tag,
}: {
    country?: string;
    tag?: ElementType;
}) {
    // if (import.meta.env.MODE === "development") {
    //     console.log(
    //         "[react-placeholder] Reminder: you left a placeholder in your code."
    //     );
    // }
    const Tag = tag || Fragment;
    return <Tag>{address[country || "FR"]}</Tag>;
}

export function Name({
    country,
    tag,
}: {
    country?: CountryType;
    tag?: ElementType;
}): JSX.Element {
    // if (import.meta.env.MODE === "development") {
    //     console.log(
    //         "[react-placeholder] Reminder: you left a placeholder in your code."
    //     );
    // }
    const Tag = tag || Fragment;

    const nameArr = names[country || "FR"];

    const randomIndex1 = Math.floor(Math.random() * nameArr.length);
    let randomIndex2 = Math.floor(Math.random() * nameArr.length);
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * nameArr.length);
    }
    const randomName1 = nameArr[randomIndex1];
    const randomName2 = nameArr[randomIndex2];
    return <Tag>{`${randomName1} ${randomName2}`}</Tag>;
}
