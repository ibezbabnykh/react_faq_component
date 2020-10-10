import Tabs from './tabs';
import { withApiService } from '../hoc-helper';

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getQuestionsData
    }
};

export default withApiService(mapMethodsToProps)(Tabs);