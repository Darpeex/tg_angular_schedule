import { Telegraf, Markup } from "telegraf"; // Telegraf - конструктор для работы с ботами, Markup - чтобы работать с клавиатурой

const tocken = "7036924001:AAHiJlEkEDIKU1bVmN0iKUbgbDoSQ4tQhl0"; // Токен бота в телеграмм
const webAppUrl = "https://ya.ru/"; // Токен бота в телеграмм

const bot = new Telegraf(tocken); // Создание бота через его токин

// Для обработки команды используем метод command
// Команда называется start
bot.command("start", (context) => {
  context.reply(
    "Добро пожаловать! Нажмите кнопку ниже, чтобы запустить приложение", // Даём инструкцию пользователю
    Markup.keyboard([
      // webApp сигнализирует телеграмму, что дальше будет работа с веб-приложением
      Markup.button.webApp("Отправить сообщение", webAppUrl),
    ]) // Чтобы в дальнешем пользователь мог запустить нашего бота нажав на кнопку "Отправить сообщение"
  );
});

bot.launch(); // Запускаем бота
