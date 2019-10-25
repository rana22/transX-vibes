import { Status } from '../enum/status.enum';
import { Category } from '../enum/category.enum';

export class Order {
    orderId: number;
    detail : Detail;
}

class Detail{
    name: String;
    category: Category;
    orderStatus?: Status;
    received : Date;
    isComplete: boolean;
    complited?: Date;
}
