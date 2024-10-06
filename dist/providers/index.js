import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

var queryClient = new QueryClient();
var QueryClientProviderWrapper = function (_a) {
    var children = _a.children;
    return (React.createElement(QueryClientProvider, { client: queryClient }, children));
};

export { QueryClientProviderWrapper };
//# sourceMappingURL=index.js.map
