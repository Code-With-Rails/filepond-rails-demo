// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { FilePondRails, FilePond } from 'filepond-rails'

window.FilePond = FilePond
window.FilePondRails = FilePondRails

const input = document.querySelector('.filepond')
FilePondRails.create(input)
