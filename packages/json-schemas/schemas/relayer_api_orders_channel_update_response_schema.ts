export const relayerApiOrdersChannelUpdateSchema = {
    id: '/relayerApiOrdersChannelUpdateSchema',
    type: 'object',
    properties: {
        type: { enum: ['update'] },
        channel: { enum: ['orders'] },
        requestId: { type: 'string' },
        payload: { $ref: '/relayerApiOrdersSchema' },
    },
    required: ['type', 'channel', 'requestId'],
};
