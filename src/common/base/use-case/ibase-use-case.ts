export abstract class IBaseUseCase<E, T> {
  abstract execute(data: T): Promise<E>;
}
