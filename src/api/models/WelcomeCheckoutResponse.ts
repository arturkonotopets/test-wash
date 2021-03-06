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
    WelcomeCheckoutAddress,
    WelcomeCheckoutAddressFromJSON,
    WelcomeCheckoutAddressFromJSONTyped,
    WelcomeCheckoutAddressToJSON,
    WelcomeCheckoutBillingAddress,
    WelcomeCheckoutBillingAddressFromJSON,
    WelcomeCheckoutBillingAddressFromJSONTyped,
    WelcomeCheckoutBillingAddressToJSON,
    WelcomeCheckoutUser,
    WelcomeCheckoutUserFromJSON,
    WelcomeCheckoutUserFromJSONTyped,
    WelcomeCheckoutUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface WelcomeCheckoutResponse
 */
export interface WelcomeCheckoutResponse {
    /**
     * 
     * @type {WelcomeCheckoutUser}
     * @memberof WelcomeCheckoutResponse
     */
    user: WelcomeCheckoutUser;
    /**
     * 
     * @type {WelcomeCheckoutAddress}
     * @memberof WelcomeCheckoutResponse
     */
    address: WelcomeCheckoutAddress;
    /**
     * 
     * @type {WelcomeCheckoutBillingAddress}
     * @memberof WelcomeCheckoutResponse
     */
    billingAddress: WelcomeCheckoutBillingAddress;
}

export function WelcomeCheckoutResponseFromJSON(json: any): WelcomeCheckoutResponse {
    return WelcomeCheckoutResponseFromJSONTyped(json, false);
}

export function WelcomeCheckoutResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WelcomeCheckoutResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': WelcomeCheckoutUserFromJSON(json['user']),
        'address': WelcomeCheckoutAddressFromJSON(json['address']),
        'billingAddress': WelcomeCheckoutBillingAddressFromJSON(json['billing_address']),
    };
}

export function WelcomeCheckoutResponseToJSON(value?: WelcomeCheckoutResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': WelcomeCheckoutUserToJSON(value.user),
        'address': WelcomeCheckoutAddressToJSON(value.address),
        'billing_address': WelcomeCheckoutBillingAddressToJSON(value.billingAddress),
    };
}


