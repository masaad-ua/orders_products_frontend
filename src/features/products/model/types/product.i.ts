export interface ProductGuaranteeI {
    start: string,
    end: string,
}

export interface ProductPriceI {
    value: number,
    symbol: string,
    isDefault: number
}

export interface ProductI {
    id: number;
    serialNumber: number,
    isNew: number,
    status: number,
    photo: string,
    title: string,
    series: string,
    type: string,
    specification: string,
    guarantee: ProductGuaranteeI
    price: ProductPriceI[],
    order: number,
    date: string,
    dateTo: string,
    dateFrom: string
}