import { Request, Response } from "express";

const legalController = (req: Request, res: Response) => {
  const title = "Mentions légales";
  const content = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis bibendum orci, et malesuada diam feugiat et. Duis cursus vestibulum mauris et molestie. Ut congue leo elit, a dignissim felis vestibulum nec. Fusce varius purus eget euismod ultricies. In eget convallis tellus, a sodales risus. Morbi nec nibh sagittis, scelerisque tortor tincidunt, mattis dui. Pellentesque lacinia ultricies ipsum, in tempor odio. Aliquam molestie nulla at porta feugiat. Donec in augue vitae nisi egestas tincidunt. Phasellus rutrum nunc justo, et blandit ipsum egestas sit amet. Vestibulum ut turpis nec orci lacinia feugiat et vitae lacus. Vivamus ultrices id nisi quis suscipit. Duis velit nisl, hendrerit non nunc vel, imperdiet varius ante. Nulla facilisi. Nullam blandit odio non ligula ultrices, ac commodo dui volutpat. Suspendisse porta nisi at diam facilisis ultrices.</p>

  <p>In et est tellus. Suspendisse potenti. Quisque quis arcu vitae felis posuere imperdiet. Nam tempor metus vel maximus ultricies. Aliquam et feugiat ante. Cras luctus tellus in nibh rhoncus maximus. Aliquam condimentum quam non diam commodo, sit amet interdum neque maximus. Donec interdum hendrerit nisl, at accumsan tortor consequat sed. Nulla malesuada enim id vestibulum bibendum. Nulla eu arcu eu libero interdum tincidunt et at nisl. Donec accumsan venenatis nibh ut eleifend. Mauris faucibus ante at porttitor tristique. Nulla facilisi.</p>`;
  res.render("page", { title, content });
};

export { legalController };
