import ClassMod, { defaultClassModInfo } from "./ClassMod";
import { classModDataIndex } from './data'
import { classModInfoIndex } from "./info";

export const ClassModIndex = classModIndex()

export function classModIndex(): Map<string, ClassMod> {
    let dataIndex = classModDataIndex()
    let infoIndex = classModInfoIndex()

    let result: Map<string, ClassMod> = new Map()

    dataIndex.forEach((data, key) => {
        result.set(key, {
            data: data,
            info: infoIndex.get(key) ?? defaultClassModInfo()
        })
    });

    return result
}
