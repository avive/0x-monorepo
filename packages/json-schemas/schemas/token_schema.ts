export const tokenSchema = {
    id: '/tokenSchema',
    properties: {
        name: { type: 'string' },
        symbol: { type: 'string' },
        decimals: { type: 'number' },
        address: { $ref: '/addressSchema' },
    },
    required: ['name', 'symbol', 'decimals', 'address'],
    type: 'object',
};
