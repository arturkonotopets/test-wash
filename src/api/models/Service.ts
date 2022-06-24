/* tslint:disable */
/* eslint-disable */
/**
 * WashMix
 * WashMix REST API
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Price,
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './';

/**
 * 
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * 
     * @type {number}
     * @memberof Service
     */
    readonly id?: number;
    /**
     * 
     * @type {Array<Price>}
     * @memberof Service
     */
    readonly itemList?: Array<Price>;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    readonly image?: string;
}

export function ServiceFromJSON(json: any): Service {
    return ServiceFromJSONTyped(json, false);
}

export function ServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Service {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'itemList': !exists(json, 'item_list') ? undefined : ((json['item_list'] as Array<any>).map(PriceFromJSON)),
        'title': json['title'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function ServiceToJSON(value?: Service | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
    };
}

