import { OrderRoomsModule } from './order-rooms.module';

describe('OrderRoomsModule', () => {
  let orderRoomsModule: OrderRoomsModule;

  beforeEach(() => {
    orderRoomsModule = new OrderRoomsModule();
  });

  it('should create an instance', () => {
    expect(orderRoomsModule).toBeTruthy();
  });
});
