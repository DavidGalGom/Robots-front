import { datatype, image } from "faker";
import { lorem } from "faker/locale/en";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: lorem.sentence(10),
  image: image.avatar(),
  speed: datatype.number(),
  resistance: datatype.number(),
  creationDate: datatype.string(),
}));
export const getRandomRobot = () => factory.build();
export const getRandomRobots = (count = 5) => factory.buildList(count);
