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


import * as runtime from '../runtime';
import {
    Health,
    HealthFromJSON,
    HealthToJSON,
} from '../models';

/**
 * 
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * View that shows our API is working. Also, via this view we are checking that dramatiq worker is working.
     * PUBLIC METHOD.
     */
    async healthListRaw(): Promise<runtime.ApiResponse<Array<Health>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/health/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HealthFromJSON));
    }

    /**
     * View that shows our API is working. Also, via this view we are checking that dramatiq worker is working.
     * PUBLIC METHOD.
     */
    async healthList(): Promise<Array<Health>> {
        const response = await this.healthListRaw();
        return await response.value();
    }

}