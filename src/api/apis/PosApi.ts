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
    Order,
    OrderFromJSON,
    OrderToJSON,
    OrderApplyCouponResponse,
    OrderApplyCouponResponseFromJSON,
    OrderApplyCouponResponseToJSON,
    POSBasketChangeItem,
    POSBasketChangeItemFromJSON,
    POSBasketChangeItemToJSON,
    POSBasketClear,
    POSBasketClearFromJSON,
    POSBasketClearToJSON,
    POSBasketSetExtraItems,
    POSBasketSetExtraItemsFromJSON,
    POSBasketSetExtraItemsToJSON,
    POSCoupon,
    POSCouponFromJSON,
    POSCouponToJSON,
    POSItem,
    POSItemFromJSON,
    POSItemToJSON,
    POSOrderAlreadyFormedResponse,
    POSOrderAlreadyFormedResponseFromJSON,
    POSOrderAlreadyFormedResponseToJSON,
    POSOrderApplyCoupon,
    POSOrderApplyCouponFromJSON,
    POSOrderApplyCouponToJSON,
    POSOrderCheckout,
    POSOrderCheckoutFromJSON,
    POSOrderCheckoutToJSON,
    POSOrderPrepare,
    POSOrderPrepareFromJSON,
    POSOrderPrepareToJSON,
    POSOrderPrepareResponse,
    POSOrderPrepareResponseFromJSON,
    POSOrderPrepareResponseToJSON,
    POSOrderRemoveCoupon,
    POSOrderRemoveCouponFromJSON,
    POSOrderRemoveCouponToJSON,
    POSRequestUpdate,
    POSRequestUpdateFromJSON,
    POSRequestUpdateToJSON,
    POSService,
    POSServiceFromJSON,
    POSServiceToJSON,
} from '../models';

export interface PosBasketChangeItemCreateRequest {
    data: POSBasketChangeItem;
}

export interface PosBasketClearCreateRequest {
    data: POSBasketClear;
}

export interface PosBasketListRequest {
    order: number;
}

export interface PosBasketSetExtraItemsCreateRequest {
    data: POSBasketSetExtraItems;
}

export interface PosOrdersApplyCouponCreateRequest {
    data: POSOrderApplyCoupon;
}

export interface PosOrdersCheckoutCreateRequest {
    data: POSOrderCheckout;
}

export interface PosOrdersPartialUpdateRequest {
    id: number;
    data: Order;
}

export interface PosOrdersPrepareCreateRequest {
    data: POSOrderPrepare;
}

export interface PosOrdersRemoveCouponCreateRequest {
    data: POSOrderRemoveCoupon;
}

export interface PosOrdersUpdateRequest {
    id: number;
    data: Order;
}

export interface PosRequestsUpdateCreateRequest {
    data: POSRequestUpdate;
}

/**
 * 
 */
export class PosApi extends runtime.BaseAPI {

    /**
     * Method allows to:     - Add items to basket     - Remove items from basket
     */
    async posBasketChangeItemCreateRaw(requestParameters: PosBasketChangeItemCreateRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posBasketChangeItemCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/basket/change_item/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSBasketChangeItemToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Method allows to:     - Add items to basket     - Remove items from basket
     */
    async posBasketChangeItemCreate(data: POSBasketChangeItem): Promise<Order> {
        const response = await this.posBasketChangeItemCreateRaw({ data: data });
        return await response.value();
    }

    /**
     * Method removes all items from basket.
     */
    async posBasketClearCreateRaw(requestParameters: PosBasketClearCreateRequest): Promise<runtime.ApiResponse<POSBasketClear>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posBasketClearCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/basket/clear/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSBasketClearToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => POSBasketClearFromJSON(jsonValue));
    }

    /**
     * Method removes all items from basket.
     */
    async posBasketClearCreate(data: POSBasketClear): Promise<POSBasketClear> {
        const response = await this.posBasketClearCreateRaw({ data: data });
        return await response.value();
    }

    /**
     * Method allows to see which items inside basket.
     */
    async posBasketListRaw(requestParameters: PosBasketListRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.order === null || requestParameters.order === undefined) {
            throw new runtime.RequiredError('order','Required parameter requestParameters.order was null or undefined when calling posBasketList.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/basket/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Method allows to see which items inside basket.
     */
    async posBasketList(order: number): Promise<Order> {
        const response = await this.posBasketListRaw({ order: order });
        return await response.value();
    }

    /**
     * Method gives ability to add or remove some extra items to basket.
     */
    async posBasketSetExtraItemsCreateRaw(requestParameters: PosBasketSetExtraItemsCreateRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posBasketSetExtraItemsCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/basket/set_extra_items/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSBasketSetExtraItemsToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Method gives ability to add or remove some extra items to basket.
     */
    async posBasketSetExtraItemsCreate(data: POSBasketSetExtraItems): Promise<Order> {
        const response = await this.posBasketSetExtraItemsCreateRaw({ data: data });
        return await response.value();
    }

    /**
     * Method to retrieve all coupons in POS.
     */
    async posCouponsListRaw(): Promise<runtime.ApiResponse<Array<POSCoupon>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/coupons/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(POSCouponFromJSON));
    }

    /**
     * Method to retrieve all coupons in POS.
     */
    async posCouponsList(): Promise<Array<POSCoupon>> {
        const response = await this.posCouponsListRaw();
        return await response.value();
    }

    /**
     * Method to retrieve all items in POS.
     */
    async posItemsListRaw(): Promise<runtime.ApiResponse<Array<POSItem>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/items/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(POSItemFromJSON));
    }

    /**
     * Method to retrieve all items in POS.
     */
    async posItemsList(): Promise<Array<POSItem>> {
        const response = await this.posItemsListRaw();
        return await response.value();
    }

    /**
     * Method that checks order is already formed by employee and paid by client. If order is formed - we show a link to the order in admin. If not - we show a button `CREATE ORDER` with redirect to POS.
     */
    async posOrdersAlreadyFormedListRaw(): Promise<runtime.ApiResponse<Array<POSOrderAlreadyFormedResponse>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/already_formed/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(POSOrderAlreadyFormedResponseFromJSON));
    }

    /**
     * Method that checks order is already formed by employee and paid by client. If order is formed - we show a link to the order in admin. If not - we show a button `CREATE ORDER` with redirect to POS.
     */
    async posOrdersAlreadyFormedList(): Promise<Array<POSOrderAlreadyFormedResponse>> {
        const response = await this.posOrdersAlreadyFormedListRaw();
        return await response.value();
    }

    /**
     */
    async posOrdersApplyCouponCreateRaw(requestParameters: PosOrdersApplyCouponCreateRequest): Promise<runtime.ApiResponse<OrderApplyCouponResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posOrdersApplyCouponCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/apply_coupon/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSOrderApplyCouponToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderApplyCouponResponseFromJSON(jsonValue));
    }

    /**
     */
    async posOrdersApplyCouponCreate(data: POSOrderApplyCoupon): Promise<OrderApplyCouponResponse> {
        const response = await this.posOrdersApplyCouponCreateRaw({ data: data });
        return await response.value();
    }

    /**
     */
    async posOrdersCheckoutCreateRaw(requestParameters: PosOrdersCheckoutCreateRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posOrdersCheckoutCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/checkout/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSOrderCheckoutToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     */
    async posOrdersCheckoutCreate(data: POSOrderCheckout): Promise<Order> {
        const response = await this.posOrdersCheckoutCreateRaw({ data: data });
        return await response.value();
    }

    /**
     * Method for order update. In most cases it used to change `note`.
     */
    async posOrdersPartialUpdateRaw(requestParameters: PosOrdersPartialUpdateRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling posOrdersPartialUpdate.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posOrdersPartialUpdate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OrderToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Method for order update. In most cases it used to change `note`.
     */
    async posOrdersPartialUpdate(id: number, data: Order): Promise<Order> {
        const response = await this.posOrdersPartialUpdateRaw({ id: id, data: data });
        return await response.value();
    }

    /**
     * Method that prepares order - tries to find order with existing basket and request.
     */
    async posOrdersPrepareCreateRaw(requestParameters: PosOrdersPrepareCreateRequest): Promise<runtime.ApiResponse<POSOrderPrepareResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posOrdersPrepareCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/prepare/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSOrderPrepareToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => POSOrderPrepareResponseFromJSON(jsonValue));
    }

    /**
     * Method that prepares order - tries to find order with existing basket and request.
     */
    async posOrdersPrepareCreate(data: POSOrderPrepare): Promise<POSOrderPrepareResponse> {
        const response = await this.posOrdersPrepareCreateRaw({ data: data });
        return await response.value();
    }

    /**
     */
    async posOrdersRemoveCouponCreateRaw(requestParameters: PosOrdersRemoveCouponCreateRequest): Promise<runtime.ApiResponse<OrderApplyCouponResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posOrdersRemoveCouponCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/remove_coupon/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSOrderRemoveCouponToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderApplyCouponResponseFromJSON(jsonValue));
    }

    /**
     */
    async posOrdersRemoveCouponCreate(data: POSOrderRemoveCoupon): Promise<OrderApplyCouponResponse> {
        const response = await this.posOrdersRemoveCouponCreateRaw({ data: data });
        return await response.value();
    }

    /**
     * Method for order update. In most cases it used to change `note`.
     */
    async posOrdersUpdateRaw(requestParameters: PosOrdersUpdateRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling posOrdersUpdate.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posOrdersUpdate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/orders/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrderToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Method for order update. In most cases it used to change `note`.
     */
    async posOrdersUpdate(id: number, data: Order): Promise<Order> {
        const response = await this.posOrdersUpdateRaw({ id: id, data: data });
        return await response.value();
    }

    /**
     * Method gives ability to update request info in POS.
     */
    async posRequestsUpdateCreateRaw(requestParameters: PosRequestsUpdateCreateRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling posRequestsUpdateCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/requests/update/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: POSRequestUpdateToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Method gives ability to update request info in POS.
     */
    async posRequestsUpdateCreate(data: POSRequestUpdate): Promise<Order> {
        const response = await this.posRequestsUpdateCreateRaw({ data: data });
        return await response.value();
    }

    /**
     * Method to retrieve all services with items in POS.
     */
    async posServicesListRaw(): Promise<runtime.ApiResponse<Array<POSService>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/pos/services/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(POSServiceFromJSON));
    }

    /**
     * Method to retrieve all services with items in POS.
     */
    async posServicesList(): Promise<Array<POSService>> {
        const response = await this.posServicesListRaw();
        return await response.value();
    }

}
