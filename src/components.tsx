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

/**
 * Displays a Lorem Ipsum text.
 * @param words - The number of words to generate.
 * @param chars - The number of characters to generate.
 * @param tag - The HTML tag to use for the component. Defaults to Fragment.
 * @returns a component that displays a Lorem Ipsum text within the specified tag.
 * @example
 * <Lorem words={8} /> // <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>
 * <Lorem chars={20} tag="p" /> // <p>Lorem ipsum dolor si</p>
 */
export function Lorem({
    words,
    chars,
    tag,
}: RequireExactlyOne<ILoremProps, "words" | "chars">) {
    const len = words || chars;
    if (!len) {
        console.error(
            "You must provide a `words` or `chars` prop to the Lorem component."
        );
        return <></>;
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

/**
 * Displays an address from the specified country.
 * @param country - The country code of the address. Defaults to FR.
 * @param tag - The HTML tag to use for the component. Defaults to Fragment.
 * @returns a component that displays an address.
 * @example
 * <Address /> // <>1 rue de la Paix, 75008 Paris</>
 * <Address country="US" tag="a" /> // <a>123 Main St, Springfield, IL 62701</a>
 */
export function Address({
    country,
    tag,
}: {
    country?: string;
    tag?: ElementType;
}) {
    const Tag = tag || Fragment;
    return <Tag>{address[country || "FR"]}</Tag>;
}

/**
 * Displays a name in a specified html tag.
 * @param country - The country code for the name. Defaults to FR.
 * @param tag - The HTML tag to use for the component. Defaults to Fragment.
 * @returns a component that displays a name.
 * @example <Name country="FR" /> // <>Arthur Louis</>
 *  <Name tag="div" /> // <div>Arthur Louis</div>
 *  <Name country="US" tag="p" /> // <p>John Doe</p>
 */
export function Name({
    country,
    tag,
}: {
    country?: CountryType;
    tag?: ElementType;
}): JSX.Element {
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
