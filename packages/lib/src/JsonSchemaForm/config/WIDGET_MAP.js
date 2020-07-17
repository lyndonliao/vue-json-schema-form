/**
 * Created by Liu.Jun on 2020/4/21 18:23.
 */

// 统一widget组件配置

import SelectWidget from '../widgets/SelectWidget';

export default {
    types: {
        boolean: 'el-switch',
        string: 'el-input',
        number: 'el-input-number',
        integer: 'el-input-number',
        // array: '',
    },
    common: {
        select: SelectWidget
    }
};
